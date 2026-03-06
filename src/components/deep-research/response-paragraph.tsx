import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "motion/react";
import type { ResponseParagraph as ResponseParagraphType } from "@/data/mock-deep-research";
import SourcePill from "./source-pill";
import { Steps, StepsTrigger, StepsContent } from "@/components/ui/steps";

interface ResponseParagraphProps {
  paragraph: ResponseParagraphType;
  lineOffset?: number;
}

const LINE_DELAY = 0.1;

const ResponseParagraph = ({
  paragraph,
  lineOffset = 0,
}: ResponseParagraphProps) => {
  const chunks = paragraph.content.split("\n\n").filter(Boolean);

  return (
    <div>
      <div className="prose prose-sm max-w-none text-[var(--fg-subtle)] [&_p]:my-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_ul]:my-1 [&_ul]:pl-4 [&_li]:my-0.5 [&_ol]:my-1 [&_ol]:pl-4 [&_strong]:font-medium [&_strong]:text-[var(--fg-base)] [&_h2]:text-base [&_h2]:font-medium [&_h2]:text-[var(--fg-base)] [&_h2]:mt-0 [&_h2]:mb-1 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-[var(--fg-base)] [&_h3]:mt-0 [&_h3]:mb-1 text-sm leading-[1.7] [&_p]:text-sm [&_p]:leading-[1.7] [&_li]:text-sm [&_li]:leading-[1.7]">
        {chunks.map((chunk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: (lineOffset + i) * LINE_DELAY,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{chunk}</ReactMarkdown>
          </motion.div>
        ))}
      </div>

      {paragraph.sources.length > 0 && (
        <motion.div
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: (lineOffset + chunks.length) * LINE_DELAY,
            duration: 0.3,
          }}
        >
          <Steps defaultOpen={false}>
            <StepsTrigger className="text-2xs font-medium text-[var(--fg-muted)]">
              {paragraph.sources.length} sources
            </StepsTrigger>
            <StepsContent>
              <div className="flex flex-wrap gap-1.5 py-1">
                {paragraph.sources.map((source) => (
                  <SourcePill
                    key={`${source.type}-${source.label}`}
                    source={source}
                  />
                ))}
              </div>
            </StepsContent>
          </Steps>
        </motion.div>
      )}
    </div>
  );
};

export default ResponseParagraph;

export function getChunkCount(content: string): number {
  return content.split("\n\n").filter(Boolean).length + 1;
}
