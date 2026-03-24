import { motion } from "motion/react";
import type { ResponseParagraph as ResponseParagraphType } from "@/data/mock-deep-research";
import ResponseParagraph, { getChunkCount } from "./response-paragraph";

interface ResponseBlockProps {
  paragraphs: ResponseParagraphType[];
  timestamp: string;
}

const LINE_DELAY = 0.1;

const ResponseBlock = ({ paragraphs, timestamp }: ResponseBlockProps) => {
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
          <ResponseParagraph
            paragraph={paragraph}
            lineOffset={offsets[index]}
          />
        </div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: runningOffset * LINE_DELAY + 0.2,
          duration: 0.4,
        }}
        className="flex justify-end"
      >
        <span className="text-2xs text-[var(--muted-foreground)]">{timestamp}</span>
      </motion.div>
    </div>
  );
};

export default ResponseBlock;
