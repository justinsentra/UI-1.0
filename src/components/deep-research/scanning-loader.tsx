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

// Integration logos
import outlookLogo from "@/assets/logos/outlook.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import excelLogo from "@/assets/logos/excel.png";
import wordLogo from "@/assets/logos/word.png";
import powerpointLogo from "@/assets/logos/powerpoint.png";
import sharepointLogo from "@/assets/logos/sharepoint.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import serviceNowLogo from "@/assets/logos/service-now.png";
import oracleLogo from "@/assets/logos/oracle-financials.png";
import mondayLogo from "@/assets/logos/monday-com.webp";
import zoomLogo from "@/assets/logos/zoom.svg";
import linearLogo from "@/assets/logos/linear.svg";

const ICON_MAP: Record<string, string> = {
  outlook: outlookLogo,
  "ms-teams": teamsLogo,
  excel: excelLogo,
  word: wordLogo,
  powerpoint: powerpointLogo,
  sharepoint: sharepointLogo,
  salesforce: salesforceLogo,
  "service-now": serviceNowLogo,
  "oracle-financials": oracleLogo,
  "monday-com": mondayLogo,
  zoom: zoomLogo,
  linear: linearLogo,
};

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
                  className={`inline-flex items-center gap-2 ${
                    index === visibleCount - 1
                      ? "text-muted-foreground"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {step.icons && step.icons.length > 0 && (
                    <span className="inline-flex items-center gap-1 shrink-0">
                      {step.icons.map((iconKey) => {
                        const src = ICON_MAP[iconKey];
                        return src ? (
                          <img
                            key={iconKey}
                            src={src}
                            alt={iconKey}
                            className="size-3.5 object-contain"
                          />
                        ) : null;
                      })}
                    </span>
                  )}
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
