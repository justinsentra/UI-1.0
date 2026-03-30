import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Mail,
  ClipboardList,
  Share2,
  ExternalLink,
  FileText,
  AlertTriangle,
  BarChart3,
  Truck,
  Microscope,
  Zap,
  Check,
} from "lucide-react";
import { Mail as MailIcon } from "lucide-react";
import { cn } from "@lib/utils";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/stores/ui-store";
import {
  MOCK_ARTIFACTS,
  ARTIFACT_TYPE_LABELS,
} from "@/data/mock-artifacts";
import type { ArtifactType, ArtifactNextStep } from "@/data/mock-artifacts";

const TYPE_ICONS: Record<ArtifactType, typeof FileText> = {
  memo: FileText,
  "pipeline-summary": BarChart3,
  "risk-report": AlertTriangle,
  "vendor-delay-report": Truck,
  research: Microscope,
  "follow-up": MailIcon,
};

const TYPE_COLORS: Record<ArtifactType, string> = {
  memo: "bg-blue-500/10 text-blue-500",
  "pipeline-summary": "bg-emerald-500/10 text-emerald-500",
  "risk-report": "bg-red-500/10 text-red-500",
  "vendor-delay-report": "bg-amber-500/10 text-amber-500",
  research: "bg-violet-500/10 text-violet-500",
  "follow-up": "bg-sky-500/10 text-sky-500",
};

const STEP_ICONS: Record<ArtifactNextStep["type"], typeof Calendar> = {
  "schedule-call": Calendar,
  "send-email": Mail,
  "create-task": ClipboardList,
  "share-report": Share2,
  "open-link": ExternalLink,
};

const STEP_LABELS: Record<ArtifactNextStep["type"], string> = {
  "schedule-call": "Schedule",
  "send-email": "Send Email",
  "create-task": "Create Task",
  "share-report": "Share",
  "open-link": "Open",
};

function NextStepCard({
  step,
  onExecute,
  executed,
}: {
  step: ArtifactNextStep;
  onExecute: () => void;
  executed: boolean;
}) {
  const Icon = STEP_ICONS[step.type];
  const actionLabel = STEP_LABELS[step.type];

  return (
    <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
          <Icon size={15} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">
            {step.label}
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1 leading-relaxed">
            {step.detail}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          variant={executed ? "outline" : "default"}
          className="rounded-full gap-1.5 text-xs"
          onClick={onExecute}
          disabled={executed}
        >
          {executed ? (
            <>
              <Check size={13} />
              Done
            </>
          ) : (
            <>
              <Zap size={13} />
              {actionLabel}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

const ArtifactDetailPage = () => {
  const { artifactId } = useParams<{ artifactId: string }>();
  const navigate = useNavigate();
  const addToast = useUIStore((s) => s.addToast);

  const artifact = useMemo(
    () => MOCK_ARTIFACTS.find((a) => a.id === artifactId),
    [artifactId],
  );

  const executedSteps = useMemo(() => new Set<string>(), []);

  if (!artifact) {
    return (
      <div className="px-8 pt-14 pb-16 min-h-screen max-w-3xl mx-auto">
        <Link
          to="/artifacts"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-muted-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          All artifacts
        </Link>
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">Artifact not found.</p>
        </div>
      </div>
    );
  }

  const TypeIcon = TYPE_ICONS[artifact.type];
  const colorClass = TYPE_COLORS[artifact.type];
  const date = new Date(artifact.createdAt);
  const formatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleExecute = (step: ArtifactNextStep) => {
    executedSteps.add(step.id);

    const messages: Record<ArtifactNextStep["type"], string> = {
      "schedule-call": "Calendar invite drafted",
      "send-email": "Email draft created in Outlook",
      "create-task": "Task created",
      "share-report": "Report shared with team",
      "open-link": "Opening link...",
    };

    addToast("success", messages[step.type]);
  };

  return (
    <div className="h-full overflow-x-hidden overflow-y-auto">
      <div className="px-8 pt-14 pb-24 min-h-screen max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/artifacts"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-muted-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          All artifacts
        </Link>

        {/* Header */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl",
                colorClass,
              )}
            >
              <TypeIcon size={18} />
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                {ARTIFACT_TYPE_LABELS[artifact.type]}
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-medium text-foreground tracking-tight">
            {artifact.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground/60">
            <span>{formatted}</span>
            <span className="text-border">|</span>
            <button
              type="button"
              onClick={() => navigate(`/actions/${artifact.actionId}`)}
              className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-muted-foreground/60 underline-offset-2 hover:underline"
            >
              {artifact.actionName}
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-6 mb-8" />

        {/* Summary / Description */}
        <section>
          <h2 className="text-sm font-medium text-foreground mb-3">Summary</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {artifact.summary}
          </p>
        </section>

        {/* Next Steps */}
        {artifact.nextSteps.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-medium text-foreground mb-4">
              Recommended Next Steps
            </h2>
            <div className="space-y-3">
              {artifact.nextSteps.map((step) => (
                <NextStepCard
                  key={step.id}
                  step={step}
                  onExecute={() => handleExecute(step)}
                  executed={executedSteps.has(step.id)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArtifactDetailPage;
