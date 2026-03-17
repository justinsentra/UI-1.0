import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReportsStore } from "@/stores/reports-store";
import type { ReportComment } from "@/types";

interface InlineCommentPopupProps {
  rect: { top: number; left: number; width: number; height: number };
  highlightedText: string;
  sectionIndex: number;
  startOffset: number;
  endOffset: number;
  onSave: (comment: ReportComment) => void;
  onCancel: () => void;
}

export function InlineCommentPopup({
  rect,
  highlightedText,
  sectionIndex,
  startOffset,
  endOffset,
  onSave,
  onCancel,
}: InlineCommentPopupProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && text.trim()) {
        handleSave();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [text, onCancel]);

  const handleSave = () => {
    if (!text.trim()) return;
    const comment: ReportComment = {
      id: `comment-${Date.now()}`,
      text: text.trim(),
      author: "Justin Cheng",
      timestamp: new Date().toISOString(),
      highlightedText,
      sectionIndex,
      startOffset,
      endOffset,
    };
    onSave(comment);
  };

  const popupLeft = rect.left + rect.width + 12;
  const popupTop = rect.top;

  const clampedLeft = Math.min(popupLeft, window.innerWidth - 280);
  const clampedTop = Math.min(Math.max(popupTop, 8), window.innerHeight - 200);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: -4 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -4 }}
      transition={{ duration: 0.15 }}
      className="fixed z-50 w-[256px] p-3 bg-background border border-[var(--border-base)] shadow-lg rounded-xl"
      style={{ top: clampedTop, left: clampedLeft }}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a note..."
        rows={3}
        className="w-full px-2 py-1.5 rounded-lg border border-[var(--border-base)] bg-transparent text-xs text-[var(--fg-base)] leading-relaxed resize-none placeholder:text-[var(--fg-disabled)] outline-none focus:border-[var(--fg-muted)]"
      />
      <div className="flex items-center justify-between mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="text-2xs text-[var(--fg-muted)] hover:text-[var(--fg-base)] bg-transparent border-none cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={!text.trim()}
          className={cn(
            "px-3 py-1 rounded-full text-2xs font-medium border-none cursor-pointer transition-opacity",
            text.trim()
              ? "bg-[var(--fg-base)] text-[var(--bg-base)] hover:opacity-90"
              : "bg-[var(--bg-subtle)] text-[var(--fg-disabled)] cursor-not-allowed",
          )}
        >
          Save
        </button>
      </div>
    </motion.div>
  );
}

interface NotePopoverProps {
  comment: ReportComment;
  rect: { top: number; left: number };
  onClose: () => void;
  onDelete: (id: string) => void;
}

export function NotePopover({
  comment,
  rect,
  onClose,
  onDelete,
}: NotePopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const clampedLeft = Math.min(Math.max(rect.left, 8), window.innerWidth - 280);
  const clampedTop = Math.min(
    Math.max(rect.top + 24, 8),
    window.innerHeight - 160,
  );

  return (
    <motion.div
      ref={popoverRef}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.12 }}
      className="fixed z-50 w-[256px] p-3 bg-background border border-[var(--border-base)] shadow-lg rounded-xl group/note"
      style={{ top: clampedTop, left: clampedLeft }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-3xs font-medium text-[var(--fg-muted)] uppercase tracking-wider">
          Note
        </span>
        <div className="flex items-center gap-0.5 opacity-0 group-hover/note:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => onDelete(comment.id)}
            className="h-5 w-5 rounded flex items-center justify-center text-[var(--fg-muted)] hover:text-red-500 hover:bg-red-50 bg-transparent border-none cursor-pointer transition-colors"
          >
            <Trash2 size={11} />
          </button>
        </div>
      </div>
      <p className="text-xs text-[var(--fg-base)] leading-relaxed">
        {comment.text}
      </p>
      <p className="text-3xs text-[var(--fg-disabled)] mt-1.5">
        {comment.author} &middot;{" "}
        {new Date(comment.timestamp).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </p>
    </motion.div>
  );
}

interface HighlightedContentProps {
  children: React.ReactNode;
  sectionIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function HighlightedContent({
  children,
  sectionIndex,
  containerRef,
}: HighlightedContentProps) {
  const comments = useReportsStore((s) => s.comments);
  const addComment = useReportsStore((s) => s.addComment);
  const removeComment = useReportsStore((s) => s.removeComment);
  const [pendingSelection, setPendingSelection] = useState<{
    text: string;
    rect: { top: number; left: number; width: number; height: number };
    startOffset: number;
    endOffset: number;
  } | null>(null);
  const [activeCommentId, setActiveCommentId] = useState<string | null>(null);
  const [activeRect, setActiveRect] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const sectionComments = comments.filter(
    (c) => c.sectionIndex === sectionIndex,
  );

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const text = selection.toString().trim();
    if (!text || text.length < 3) return;

    // Check if selection is within this container
    if (
      containerRef.current &&
      !containerRef.current.contains(range.commonAncestorContainer)
    ) {
      return;
    }

    const rect = range.getBoundingClientRect();
    setPendingSelection({
      text,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
      startOffset: range.startOffset,
      endOffset: range.endOffset,
    });
  }, [containerRef]);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  const handleSaveComment = (comment: ReportComment) => {
    addComment(comment);
    setPendingSelection(null);
    window.getSelection()?.removeAllRanges();
  };

  const handleCancelComment = () => {
    setPendingSelection(null);
    window.getSelection()?.removeAllRanges();
  };

  const handleHighlightClick = (
    comment: ReportComment,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    if (activeCommentId === comment.id) {
      setActiveCommentId(null);
      setActiveRect(null);
    } else {
      const target = e.currentTarget.getBoundingClientRect();
      setActiveCommentId(comment.id);
      setActiveRect({ top: target.top, left: target.left });
    }
  };

  const handleDeleteComment = (id: string) => {
    removeComment(id);
    setActiveCommentId(null);
    setActiveRect(null);
  };

  const activeComment = sectionComments.find((c) => c.id === activeCommentId);

  return (
    <div ref={containerRef}>
      {children}

      {/* Highlight overlays for saved comments */}
      {sectionComments.map((comment) => (
        <span
          key={comment.id}
          data-highlight={comment.id}
          className="cursor-pointer"
          onClick={(e) => handleHighlightClick(comment, e)}
        />
      ))}

      <AnimatePresence>
        {pendingSelection && (
          <InlineCommentPopup
            rect={pendingSelection.rect}
            highlightedText={pendingSelection.text}
            sectionIndex={sectionIndex}
            startOffset={pendingSelection.startOffset}
            endOffset={pendingSelection.endOffset}
            onSave={handleSaveComment}
            onCancel={handleCancelComment}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeComment && activeRect && (
          <NotePopover
            comment={activeComment}
            rect={activeRect}
            onClose={() => {
              setActiveCommentId(null);
              setActiveRect(null);
            }}
            onDelete={handleDeleteComment}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
