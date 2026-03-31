import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import type {
  ResponseParagraph as ResponseParagraphType,
  TimelineWeek,
} from "@/data/mock-deep-research";
import ResponseParagraph, { getChunkCount } from "./response-paragraph";
import { OracleTimeline } from "./oracle-timeline";

interface ResponseBlockProps {
  paragraphs: ResponseParagraphType[];
  timestamp: string;
  timeline?: TimelineWeek[];
}

const LINE_DELAY = 0.1;

function CollapsibleParagraph({
  paragraph,
  lineOffset,
}: {
  paragraph: ResponseParagraphType;
  lineOffset: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract the bold header from the content (first line like **Week 3 (Feb 3): ...**)
  const headerMatch = paragraph.content.match(/^\*\*(.+?)\*\*/);
  const headerText = headerMatch ? headerMatch[1] : paragraph.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: lineOffset * LINE_DELAY, duration: 0.3 }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)]/50 px-4 py-3 text-left transition-colors hover:bg-[var(--accent)] cursor-pointer"
      >
        <ChevronRight
          size={14}
          className={`shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
        />
        <span className="text-sm font-medium text-[var(--foreground)]">
          {headerText}
        </span>
        <span className="ml-auto text-2xs text-[var(--muted-foreground)]">
          {paragraph.sources.length} sources
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="ml-4 border-l-2 border-[var(--border)] pl-4 pt-3">
              <ResponseParagraph paragraph={paragraph} lineOffset={0} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const ResponseBlock = ({
  paragraphs,
  timestamp,
  timeline,
}: ResponseBlockProps) => {
  let runningOffset = 0;
  const offsets = paragraphs.map((p) => {
    const offset = runningOffset;
    runningOffset += getChunkCount(p.content);
    return offset;
  });

  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((paragraph, index) => (
        <div key={paragraph.id}>
          {paragraph.collapsible ? (
            <CollapsibleParagraph
              paragraph={paragraph}
              lineOffset={offsets[index]}
            />
          ) : (
            <ResponseParagraph
              paragraph={paragraph}
              lineOffset={offsets[index]}
            />
          )}
        </div>
      ))}
      {timeline && timeline.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: runningOffset * LINE_DELAY + 0.3,
            duration: 0.4,
          }}
        >
          <OracleTimeline weeks={timeline} />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: runningOffset * LINE_DELAY + 0.2,
          duration: 0.4,
        }}
        className="flex justify-end"
      >
        <span className="text-2xs text-[var(--muted-foreground)]">
          {timestamp}
        </span>
      </motion.div>
    </div>
  );
};

export default ResponseBlock;
