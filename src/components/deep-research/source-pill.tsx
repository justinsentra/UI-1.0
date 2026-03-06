import { useNavigate } from "react-router-dom";
import type { SourceRef } from "@/data/mock-deep-research";
import { getSourceIcon } from "@/icons/source-icons";

interface SourcePillProps {
  source: SourceRef;
}

const SourcePill = ({ source }: SourcePillProps) => {
  const navigate = useNavigate();
  const Icon = getSourceIcon(source.type);

  return (
    <button
      type="button"
      onClick={() => navigate("/meeting-detail")}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-2xs font-medium bg-muted text-muted-foreground cursor-pointer hover:bg-secondary-hover transition-colors border-none"
    >
      <Icon size={13} />
      <span className="truncate max-w-[140px]">{source.label}</span>
    </button>
  );
};

export default SourcePill;
