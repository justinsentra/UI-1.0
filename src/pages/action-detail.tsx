import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Ellipsis, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SegmentedToggle } from "@/components/ui/segmented-toggle";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { MOCK_ACTIONS } from "@/data/mock-actions";
import type { Action, ActionArtifact } from "@/data/mock-actions";
import { useReportsStore } from "@/stores/reports-store";

import outlookLogo from "@/assets/logos/outlook.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import excelLogo from "@/assets/logos/excel.png";
import sharePointLogo from "@/assets/logos/sharepoint.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import serviceNowLogo from "@/assets/logos/service-now.png";
import mondayComLogo from "@/assets/logos/monday-com.webp";
import { ZoomIcon } from "@/icons/source-icons";
import type { ComponentType } from "react";

interface ActionIntegrationVisual {
  logo?: string;
  LogoIcon?: ComponentType<{ size?: number; className?: string }>;
}

const integrationVisualMap: Record<string, ActionIntegrationVisual> = {
  outlook: { logo: outlookLogo },
  teams: { logo: teamsLogo },
  zoom: { LogoIcon: ZoomIcon },
  excel: { logo: excelLogo },
  sharepoint: { logo: sharePointLogo },
  salesforce: { logo: salesforceLogo },
  servicenow: { logo: serviceNowLogo },
  "monday-com": { logo: mondayComLogo },
};

const integrationNames: Record<string, string> = {
  outlook: "Outlook",
  teams: "Microsoft Teams",
  zoom: "Zoom",
  excel: "Excel",
  sharepoint: "SharePoint",
  salesforce: "Salesforce",
  servicenow: "ServiceNow",
  "monday-com": "Monday.com",
};

const triggerOptions = [
  { label: "Schedule", value: "scheduled" },
  { label: "Triggers", value: "triggered" },
];

interface ActionDetailLocationState {
  initialTab?: string;
}

const ACTION_DETAIL_TABS = ["plan", "history", "approved"];

const ActionDetailPage = () => {
  const { actionId } = useParams<{ actionId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const setSelectedReport = useReportsStore((state) => state.setSelectedReport);
  const locationState = location.state as ActionDetailLocationState | null;
  const requestedInitialTab = ACTION_DETAIL_TABS.includes(
    locationState?.initialTab ?? "",
  )
    ? locationState?.initialTab ?? "plan"
    : "plan";

  const existingAction = useMemo(
    () => MOCK_ACTIONS.find((a) => a.id === actionId),
    [actionId],
  );

  const isNew = actionId === "new";
  const initial: Action = existingAction ?? {
    id: "new",
    name: "",
    description: "",
    active: false,
    schedule: "",
    integrations: [],
    prompt: "",
    triggerType: "scheduled",
    frequency: { type: "DAILY", interval: 1, time: "09:00 AM" },
    approvedArtifacts: [],
  };

  const [name, setName] = useState(initial.name);
  const [prompt, setPrompt] = useState(initial.prompt);
  const [triggerType, setTriggerType] = useState(initial.triggerType);
  const [frequencyType, setFrequencyType] = useState(
    initial.frequency?.type ?? "DAILY",
  );
  const [interval, setInterval] = useState(
    String(initial.frequency?.interval ?? 1),
  );
  const [time, setTime] = useState(initial.frequency?.time ?? "09:00 AM");
  const [integrations, setIntegrations] = useState<string[]>(
    initial.integrations,
  );
  const [selectedTab, setSelectedTab] = useState(requestedInitialTab);

  useEffect(() => {
    setSelectedTab(requestedInitialTab);
  }, [requestedInitialTab, actionId]);

  if (!isNew && !existingAction) {
    return (
      <div className="px-8 pt-14 pb-16 min-h-screen max-w-5xl mx-auto">
        <Empty className="mt-20 border border-dashed border-border rounded-2xl bg-card/50 px-8 py-20">
          <EmptyHeader>
            <EmptyTitle>Action not found</EmptyTitle>
            <EmptyDescription>
              <Link to="/actions" className="text-primary hover:underline">
                Back to Actions
              </Link>
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    );
  }

  const handleApprovedArtifactClick = (actionArtifact: ActionArtifact) => {
    if (actionArtifact.artifactType === "report" && actionArtifact.reportId) {
      setSelectedReport(actionArtifact.reportId);
      navigate("/report-detail");
      return;
    }

    navigate("/deep-research", {
      state: { prefill: actionArtifact.prompt ?? actionArtifact.title },
    });
  };

  return (
    <div className="px-8 pt-14 pb-16 min-h-screen max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        to="/actions"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-muted-foreground transition-colors"
      >
        <ArrowLeft size={14} />
        All actions
      </Link>

      {/* Header */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <Textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Untitled action"
            rows={1}
            className="w-full min-h-0! border-0 bg-background p-0 text-2xl! font-medium text-foreground placeholder:text-muted-foreground ring-0 focus-visible:border-0 focus-visible:ring-0 resize-none field-sizing-content dark:bg-background"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="icon" className="rounded-full">
            <Ellipsis size={16} />
          </Button>
          <Button className="rounded-full">
            Activate
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mt-8">
        <TabsList variant="underline">
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
        </TabsList>

        <TabsContent value="plan">
          {/* When */}
          <div className="mt-8">
            <Label>When</Label>
            <div className="mt-2 rounded-xl border border-border bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <SegmentedToggle
                  options={triggerOptions}
                  value={triggerType}
                  onChange={(v) =>
                    setTriggerType(v as "scheduled" | "triggered")
                  }
                />
              </div>

              {triggerType === "scheduled" && (
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>Run</span>
                  <Select
                    value={frequencyType}
                    onValueChange={(v) =>
                      setFrequencyType(v as "DAILY" | "WEEKLY" | "MONTHLY")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DAILY">every day</SelectItem>
                      <SelectItem value="WEEKLY">every week</SelectItem>
                      <SelectItem value="MONTHLY">every month</SelectItem>
                    </SelectContent>
                  </Select>

                  {frequencyType !== "DAILY" && (
                    <>
                      <span>every</span>
                      <Input
                        type="number"
                        min={1}
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                        className="w-14"
                      />
                      <span>
                        {frequencyType === "WEEKLY" ? "week(s)" : "month(s)"}
                      </span>
                    </>
                  )}

                  <span>at</span>
                  <Input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="09:00 AM"
                    className="w-24"
                  />
                </div>
              )}

              {triggerType === "triggered" && (
                <div className="mt-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                  {initial.triggerDetail ??
                    "This action will run when its trigger conditions are met."}
                </div>
              )}
            </div>
          </div>

          {/* Prompt */}
          <div className="mt-6">
            <Label>Prompt</Label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what this action should do..."
              className="mt-2 min-h-[200px] resize-y"
            />
          </div>

          {/* Integrations */}
          <div className="mt-6">
            <Label>Using Integrations</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {integrations.length > 0 ? (
                integrations.map((id) => (
                  <ActionIntegrationPill
                    key={id}
                    integrationId={id}
                    onRemove={() =>
                      setIntegrations((prev) =>
                        prev.filter((i) => i !== id),
                      )
                    }
                  />
                ))
              ) : (
                <EmptyDescription>
                  You can mention integrations using @ in the prompt
                </EmptyDescription>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-end">
            <Button
              className="rounded-full"
              onClick={() => navigate("/actions")}
            >
              {isNew ? "Create Action" : "Save Changes"}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Empty className="mt-8 border border-dashed border-border rounded-2xl bg-muted/50 px-8 py-20">
            <EmptyHeader>
              <EmptyMedia>
                <GitBranch size={36} className="text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No action runs yet</EmptyTitle>
              <EmptyDescription>
                Once this action is run, you can see the history here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </TabsContent>

        <TabsContent value="approved">
          {initial.approvedArtifacts.length > 0 ? (
            <div className="mt-8 space-y-3">
              {initial.approvedArtifacts.map((actionArtifact) => (
                <button
                  key={actionArtifact.id}
                  type="button"
                  onClick={() => handleApprovedArtifactClick(actionArtifact)}
                  className="flex w-full items-start justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 text-left transition-colors hover:bg-accent"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {actionArtifact.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {actionArtifact.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                    {actionArtifact.artifactType === "report"
                      ? "Report"
                      : "Artifact"}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <Empty className="mt-8 border border-dashed border-border rounded-2xl bg-muted/50 px-8 py-20">
              <EmptyHeader>
                <EmptyMedia>
                  <ShieldCheck size={36} className="text-muted-foreground" />
                </EmptyMedia>
                <EmptyTitle>No approved artifacts yet</EmptyTitle>
                <EmptyDescription>
                  Generated artifacts from this action will appear here.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ActionIntegrationPillProps {
  integrationId: string;
  onRemove: () => void;
}

const ActionIntegrationPill = ({
  integrationId,
  onRemove,
}: ActionIntegrationPillProps) => {
  const integrationVisual = integrationVisualMap[integrationId];
  const IntegrationLogoIcon = integrationVisual?.LogoIcon;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onRemove}
      className="group/integration-item relative h-auto gap-1.5 rounded-full px-2.5 py-1.5"
    >
      {integrationVisual?.logo ? (
        <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full transition-opacity group-hover/integration-item:opacity-0">
          <img
            src={integrationVisual.logo}
            alt={integrationId}
            className="size-3.5 object-contain"
          />
        </span>
      ) : IntegrationLogoIcon ? (
        <span className="flex size-5 shrink-0 items-center justify-center transition-opacity group-hover/integration-item:opacity-0">
          <IntegrationLogoIcon size={14} />
        </span>
      ) : null}
      <span className="transition-opacity group-hover/integration-item:opacity-0">
        {integrationNames[integrationId] ?? integrationId}
      </span>
      <span className="absolute inset-0 flex items-center justify-center rounded-[inherit] text-xs text-destructive opacity-0 transition-opacity group-hover/integration-item:opacity-100">
        Remove
      </span>
    </Button>
  );
};

export default ActionDetailPage;
