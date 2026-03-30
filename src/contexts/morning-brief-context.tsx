import { createContext, useContext, useState, type ReactNode } from "react";

interface MorningBriefContextType {
  showMorningBrief: boolean;
  dismissMorningBrief: () => void;
}

const MorningBriefContext = createContext<MorningBriefContextType | undefined>(
  undefined,
);

export const MorningBriefProvider = ({ children }: { children: ReactNode }) => {
  const [showMorningBrief, setShowMorningBrief] = useState(true);

  const dismissMorningBrief = () => {
    setShowMorningBrief(false);
  };

  return (
    <MorningBriefContext.Provider
      value={{ showMorningBrief, dismissMorningBrief }}
    >
      {children}
    </MorningBriefContext.Provider>
  );
};

export const useMorningBrief = () => {
  const context = useContext(MorningBriefContext);
  if (context === undefined) {
    throw new Error("useMorningBrief must be used within MorningBriefProvider");
  }
  return context;
};
