import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, Upload, ArrowRight } from "lucide-react";
import { cn } from "@lib/utils";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "format" | "details";

export function ImportModal({ isOpen, onClose }: ImportModalProps) {
  const [step, setStep] = useState<Step>("format");
  const [format, setFormat] = useState<string | null>(null);
  const [formatDropdownOpen, setFormatDropdownOpen] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setStep("format");
    setFormat(null);
    setFormatDropdownOpen(false);
    setMeetingName("");
    setStartTime("");
    setTranscript("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative bg-[var(--bg-base)] rounded-2xl shadow-2xl w-full max-w-[520px] flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-0">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-md font-semibold text-[var(--fg-base)]">
              Import Transcript
            </h2>
            <button
              type="button"
              onClick={handleClose}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)] transition-colors -mt-0.5 -mr-1"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-[var(--fg-muted)] mb-5">
            Upload or paste a transcript to create a new meeting record.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 flex-1 overflow-y-auto">
          {/* Transcript Format */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--fg-base)] mb-1.5">
              Transcript Format
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setFormatDropdownOpen((prev) => !prev)}
                className={cn(
                  "w-full h-9 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] flex items-center justify-between text-sm transition-colors hover:border-[var(--fg-disabled)]",
                  format
                    ? "text-[var(--fg-base)]"
                    : "text-[var(--fg-disabled)]",
                )}
              >
                {format ?? "Select transcript format..."}
                <ChevronDown
                  size={14}
                  className={cn(
                    "text-[var(--fg-disabled)] transition-transform",
                    formatDropdownOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {formatDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-1 left-0 right-0 z-50 bg-[var(--bg-base)] rounded-xl shadow-lg border border-[var(--border-base)] overflow-hidden"
                  >
                    {["Otter", "Rev", "Descript", "Plain Text"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormat(opt);
                          setFormatDropdownOpen(false);
                        }}
                        className={cn(
                          "w-full px-3 py-2 text-left text-sm transition-colors",
                          format === opt
                            ? "text-[var(--fg-base)] bg-[var(--bg-subtle)]"
                            : "text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)]",
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Step 2: Details */}
          <AnimatePresence>
            {step === "details" && format && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mb-5">
                  <label className="block text-sm font-medium text-[var(--fg-base)] mb-1.5">
                    Meeting Name
                    <span className="font-normal text-[var(--fg-disabled)]">
                      {" "}
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={meetingName}
                    onChange={(e) =>
                      setMeetingName(e.target.value.slice(0, 200))
                    }
                    placeholder="Enter meeting name..."
                    className="w-full h-9 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-disabled)] focus:outline-none transition-colors"
                  />
                  <p className="text-2xs text-[var(--fg-disabled)] mt-1">
                    {meetingName.length}/200
                  </p>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-[var(--fg-base)] mb-1.5">
                    Meeting Start Time
                  </label>
                  <input
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full h-9 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm text-[var(--fg-base)] focus:border-[var(--fg-disabled)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-sm font-medium text-[var(--fg-base)] mb-1.5">
                    Transcript
                  </label>
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      type="button"
                      className="h-8 px-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] flex items-center gap-1.5 text-xs text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)] transition-colors"
                    >
                      <Upload size={13} />
                      Upload File
                    </button>
                    <span className="text-2xs text-[var(--fg-disabled)]">
                      Replaces content below
                    </span>
                  </div>
                  <textarea
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    placeholder="Paste your transcript here..."
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-disabled)] focus:outline-none resize-y transition-colors"
                  />
                  <p className="text-2xs text-[var(--fg-disabled)] mt-1">
                    {transcript.length.toLocaleString()} characters
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="px-6 pb-5 pt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            className="h-9 px-4 rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] text-sm font-medium text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (step === "format" && format) setStep("details");
            }}
            disabled={!format}
            className={cn(
              "h-9 px-4 rounded-lg flex items-center gap-1.5 text-sm font-medium transition-all active:scale-[0.98]",
              format
                ? "bg-[var(--fg-base)] text-[var(--bg-base)] hover:opacity-90"
                : "bg-[var(--border-base)] text-[var(--fg-disabled)] cursor-not-allowed",
            )}
          >
            Next
            <ArrowRight size={13} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
