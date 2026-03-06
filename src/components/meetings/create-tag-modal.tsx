import { useState } from "react";
import { Lock, ChevronDown, X } from "lucide-react";

interface CreateTagModalProps {
  onClose: () => void;
}

export function CreateTagModal({ onClose }: CreateTagModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div className="relative w-[480px] bg-[var(--bg-raised)] rounded-xl border border-[var(--border-base)] shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <h2 className="text-md font-semibold text-[var(--border-base)]">
            Create tag
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--border-base)] transition-colors cursor-pointer border-none"
          >
            <X size={14} />
          </button>
        </div>

        <div className="border-t border-[var(--border-base)]" />

        <div className="px-6 py-5 space-y-5">
          <div>
            <label className="block text-sm text-[var(--fg-muted)] mb-2">
              Title and icon
            </label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-10 px-4 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--border-base)] placeholder:text-[var(--fg-muted)] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--fg-muted)] mb-2">
              Description
            </label>
            <textarea
              placeholder="Describe the purpose of this folder"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--border-base)] placeholder:text-[var(--fg-muted)] focus:outline-none resize-none"
            />
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-base)]">
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-muted)] shrink-0">
              <Lock size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[var(--border-base)]">
                My notes
              </div>
              <div className="text-xs text-[var(--fg-muted)]">
                <span className="font-medium">Private</span> Only people added
                to the folder can view.
              </div>
            </div>
            <ChevronDown
              size={16}
              className="text-[var(--fg-muted)] shrink-0"
            />
          </div>
        </div>

        <div className="border-t border-[var(--border-base)]" />

        <div className="flex items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-4 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--border-base)] hover:bg-[var(--bg-component-hover)] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-5 rounded-lg bg-[var(--bg-component-hover)] text-sm text-[var(--fg-muted)] cursor-pointer border-none"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
