import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TextShimmerLoader } from "@/components/ui/loader";
import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/ui/steps";
import type { ScanStep } from "@/data/mock-deep-research";

interface ScanningLoaderProps {
  steps: ScanStep[];
  onComplete: () => void;
}

const ScanningLoader = ({ steps, onComplete }: ScanningLoaderProps) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let current = 0;

    const reveal = () => {
      if (current >= steps.length) {
        setTimeout(() => onCompleteRef.current(), 600);
        return;
      }
      timeout = setTimeout(() => {
        current += 1;
        setVisibleCount(current);
        reveal();
      }, steps[current].duration);
    };

    reveal();
    return () => clearTimeout(timeout);
  }, [steps]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-2"
    >
      <Steps defaultOpen>
        <StepsTrigger>
          <TextShimmerLoader text="Searching across your sources" size="sm" />
        </StepsTrigger>
        <StepsContent>
          {steps.slice(0, visibleCount).map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <StepsItem>
                <span
                  className={
                    index === visibleCount - 1
                      ? "text-muted-foreground"
                      : "text-[var(--fg-disabled)]"
                  }
                >
                  {step.label}
                </span>
              </StepsItem>
            </motion.div>
          ))}
        </StepsContent>
      </Steps>
    </motion.div>
  );
};

export default ScanningLoader;
