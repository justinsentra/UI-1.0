import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Ellipsis, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox";
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
import { cn } from "@/lib/utils";

import outlookLogo from "@/assets/logos/outlook.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import excelLogo from "@/assets/logos/excel.png";
import sharePointLogo from "@/assets/logos/sharepoint.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import serviceNowLogo from "@/assets/logos/service-now.png";
import mondayComLogo from "@/assets/logos/monday-com.webp";
import { ZoomIcon } from "@/icons/source-icons";

interface ActionIntegrationVisual {
  logo?: string;
  LogoIcon?: ComponentType<{ size?: number; className?: string }>;
}

interface ActionFieldOption {
  label: string;
  value: string;
  integrationId?: string;
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

const scheduleFrequencyOptions: ActionFieldOption[] = [
  { label: "Day", value: "DAILY" },
  { label: "Week", value: "WEEKLY" },
  { label: "Month", value: "MONTHLY" },
];

const scheduleDayOptions: ActionFieldOption[] = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
];

const scheduleTimeOptions: ActionFieldOption[] = [
  { label: "08:00 AM", value: "08:00 AM" },
  { label: "09:00 AM", value: "09:00 AM" },
  { label: "09:30 AM", value: "09:30 AM" },
  { label: "10:00 AM", value: "10:00 AM" },
  { label: "12:00 PM", value: "12:00 PM" },
  { label: "05:00 PM", value: "05:00 PM" },
];

const triggerSourceOptions: ActionFieldOption[] = [
  { label: "Outlook", value: "outlook", integrationId: "outlook" },
  { label: "Zoom", value: "zoom", integrationId: "zoom" },
  { label: "Microsoft Teams", value: "teams", integrationId: "teams" },
  { label: "Salesforce", value: "salesforce", integrationId: "salesforce" },
  { label: "Monday.com", value: "monday-com", integrationId: "monday-com" },
  { label: "ServiceNow", value: "servicenow", integrationId: "servicenow" },
  { label: "SharePoint", value: "sharepoint", integrationId: "sharepoint" },
];

const triggerEventOptionsBySource: Record<string, ActionFieldOption[]> = {
  outlook: [
    { label: "new email", value: "new-email" },
    { label: "client sends financials", value: "client-sends-financials" },
    { label: "investor update requested", value: "investor-update-requested" },
  ],
  zoom: [
    { label: "after call ends", value: "after-call-ends" },
    { label: "transcript ready", value: "transcript-ready" },
    { label: "recording available", value: "recording-available" },
  ],
  teams: [
    { label: "after call ends", value: "after-call-ends" },
    { label: "transcript ready", value: "transcript-ready" },
    { label: "meeting recap requested", value: "meeting-recap-requested" },
  ],
  salesforce: [
    { label: "opportunity stage changes", value: "opportunity-stage-changes" },
    { label: "owner changes", value: "owner-changes" },
    { label: "new note added", value: "new-note-added" },
  ],
  "monday-com": [
    { label: "vendor deadline passes", value: "vendor-deadline-passes" },
    { label: "board status changes", value: "board-status-changes" },
    { label: "new blocker added", value: "new-blocker-added" },
  ],
  servicenow: [
    { label: "incident opened", value: "incident-opened" },
    { label: "access request changed", value: "access-request-changed" },
    { label: "blocker flagged", value: "blocker-flagged" },
  ],
  sharepoint: [
    { label: "model updated", value: "model-updated" },
    { label: "file uploaded", value: "file-uploaded" },
    { label: "diligence folder updated", value: "diligence-folder-updated" },
  ],
};

const triggerScopeOptionsBySource: Record<string, ActionFieldOption[]> = {
  outlook: [
    { label: "all emails", value: "all-emails" },
    { label: "client emails", value: "client-emails" },
    { label: "investor emails", value: "investor-emails" },
  ],
  zoom: [
    { label: "all calls", value: "all-calls" },
    { label: "external calls", value: "external-calls" },
    { label: "leadership calls", value: "leadership-calls" },
  ],
  teams: [
    { label: "all calls", value: "all-calls" },
    { label: "external calls", value: "external-calls" },
    { label: "internal syncs", value: "internal-syncs" },
  ],
  salesforce: [
    { label: "all opportunities", value: "all-opportunities" },
    { label: "assigned opportunities", value: "assigned-opportunities" },
    { label: "at-risk deals", value: "at-risk-deals" },
  ],
  "monday-com": [
    { label: "all boards", value: "all-boards" },
    { label: "diligence boards", value: "diligence-boards" },
    { label: "vendor trackers", value: "vendor-trackers" },
  ],
  servicenow: [
    { label: "all incidents", value: "all-incidents" },
    { label: "execution blockers", value: "execution-blockers" },
    { label: "access requests", value: "access-requests" },
  ],
  sharepoint: [
    { label: "all files", value: "all-files" },
    { label: "model folders", value: "model-folders" },
    { label: "diligence documents", value: "diligence-documents" },
  ],
};

const getTriggerEventOptions = (triggerSourceValue: string) => {
  return triggerEventOptionsBySource[triggerSourceValue] ?? triggerEventOptionsBySource.outlook;
};

const getTriggerScopeOptions = (triggerSourceValue: string) => {
  return triggerScopeOptionsBySource[triggerSourceValue] ?? triggerScopeOptionsBySource.outlook;
};

const ActionIntegrationGlyph = ({
  integrationId,
  className,
}: {
  integrationId: string;
  className?: string;
}) => {
  const integrationVisual = integrationVisualMap[integrationId];
  const IntegrationLogoIcon = integrationVisual?.LogoIcon;

  if (!integrationVisual) {
    return null;
  }

  return (
    <span
      className={cn(
        "flex size-4.5 items-center justify-center overflow-hidden rounded-sm bg-background",
        className,
      )}
    >
      {integrationVisual.logo ? (
        <img
          src={integrationVisual.logo}
          alt={integrationNames[integrationId] ?? integrationId}
          className="size-3.5 object-contain"
        />
      ) : IntegrationLogoIcon ? (
        <IntegrationLogoIcon size={14} />
      ) : null}
    </span>
  );
};

const ActionSettingCombobox = ({
  value,
  options,
  placeholder,
  onValueChange,
  className,
  showIntegrationIcon = false,
}: {
  value: string;
  options: ActionFieldOption[];
  placeholder: string;
  onValueChange: (value: string) => void;
  className?: string;
  showIntegrationIcon?: boolean;
}) => {
  const selectedOption = useMemo(() => {
    return options.find((actionFieldOption) => actionFieldOption.value === value) ?? null;
  }, [options, value]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Combobox
      items={options}
      itemToStringValue={(actionFieldOption) => actionFieldOption.label}
      value={selectedOption}
      inputValue={searchValue}
      onInputValueChange={setSearchValue}
      onValueChange={(nextOption) => {
        if (!nextOption) {
          return;
        }

        onValueChange(nextOption.value);
        setSearchValue("");
      }}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setSearchValue("");
        }
      }}
      autoHighlight
    >
      <ComboboxTrigger
        className={cn(
          "inline-flex h-8 min-w-0 items-center gap-1.5 rounded-md border border-input bg-input/20 px-2 text-xs/relaxed text-foreground shadow-none transition-colors hover:border-foreground/30 focus-visible:border-foreground/30 [&>svg:last-child]:hidden",
          className,
        )}
      >
        <span className="flex min-w-0 items-center gap-2">
          {showIntegrationIcon && selectedOption?.integrationId ? (
            <ActionIntegrationGlyph integrationId={selectedOption.integrationId} />
          ) : null}
          <span
            className={cn(
              "truncate",
              !selectedOption ? "text-muted-foreground" : "text-foreground",
            )}
          >
            {selectedOption?.label ?? placeholder}
          </span>
        </span>
      </ComboboxTrigger>
      <ComboboxContent className="min-w-60 rounded-2xl md:min-w-64">
        <ComboboxInput
          placeholder={`Search ${placeholder.toLowerCase()}`}
          showClear={false}
          showTrigger={false}
          className="m-1.5 h-9 rounded-md border border-input bg-input/20 shadow-none **:data-[slot=input-group-control]:text-sm md:**:data-[slot=input-group-control]:text-sm"
        />
        <ComboboxEmpty>No matches found.</ComboboxEmpty>
        <ComboboxList>
          {(actionFieldOption: ActionFieldOption) => (
            <ComboboxItem
              key={actionFieldOption.value}
              value={actionFieldOption}
              className="min-h-9 rounded-xl px-3 text-sm"
            >
              {actionFieldOption.integrationId ? (
                <ActionIntegrationGlyph integrationId={actionFieldOption.integrationId} />
              ) : null}
              <span>{actionFieldOption.label}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

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
  const [dayOfWeek, setDayOfWeek] = useState(
    initial.frequency?.dayOfWeek ?? "Monday",
  );
  const [time, setTime] = useState(initial.frequency?.time ?? "09:00 AM");
  const [triggerSource, setTriggerSource] = useState(
    initial.triggerConfig?.source ?? "outlook",
  );
  const [triggerEvent, setTriggerEvent] = useState(
    initial.triggerConfig?.event ?? getTriggerEventOptions("outlook")[0].value,
  );
  const [triggerScope, setTriggerScope] = useState(
    initial.triggerConfig?.scope ?? getTriggerScopeOptions("outlook")[0].value,
  );
  const [integrations, setIntegrations] = useState<string[]>(
    initial.integrations,
  );
  const [selectedTab, setSelectedTab] = useState(requestedInitialTab);

  useEffect(() => {
    setSelectedTab(requestedInitialTab);
  }, [requestedInitialTab, actionId]);

  useEffect(() => {
    const availableTriggerEventOptions = getTriggerEventOptions(triggerSource);
    const availableTriggerScopeOptions = getTriggerScopeOptions(triggerSource);

    if (
      !availableTriggerEventOptions.some(
        (triggerEventOption) => triggerEventOption.value === triggerEvent,
      )
    ) {
      setTriggerEvent(availableTriggerEventOptions[0].value);
    }

    if (
      !availableTriggerScopeOptions.some(
        (triggerScopeOption) => triggerScopeOption.value === triggerScope,
      )
    ) {
      setTriggerScope(availableTriggerScopeOptions[0].value);
    }
  }, [triggerEvent, triggerScope, triggerSource]);

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
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center size-9 rounded-full border border-input bg-popover text-foreground shadow-xs/5 transition-colors hover:bg-accent/50">
              <Ellipsis size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate("/actions")}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <div className="mt-2 rounded-xl border border-border bg-card px-3 py-2.5">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <SegmentedToggle
                  options={triggerOptions}
                  value={triggerType}
                  onChange={(v) =>
                    setTriggerType(v as "scheduled" | "triggered")
                  }
                />

                {triggerType === "scheduled" ? (
                  <div className="flex flex-1 flex-wrap items-center justify-end gap-1.5 text-xs/relaxed text-muted-foreground">
                    <span>Run</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={interval}
                      onChange={(event) =>
                        setInterval(event.target.value.replace(/\D/g, ""))
                      }
                      size={Math.max(interval.length, 1)}
                      className="h-8 min-w-0 rounded-md border border-input bg-input/20 px-1.5 text-center text-xs/relaxed text-foreground shadow-none transition-colors outline-none focus-visible:border-foreground/30"
                    />
                    <ActionSettingCombobox
                      value={frequencyType}
                      options={scheduleFrequencyOptions}
                      placeholder="Frequency"
                      onValueChange={(value) =>
                        setFrequencyType(value as "DAILY" | "WEEKLY" | "MONTHLY")
                      }
                      className="min-w-22"
                    />
                    {frequencyType === "WEEKLY" ? (
                      <ActionSettingCombobox
                        value={dayOfWeek}
                        options={scheduleDayOptions}
                        placeholder="Day"
                        onValueChange={setDayOfWeek}
                        className="min-w-24"
                      />
                    ) : null}
                    <ActionSettingCombobox
                      value={time}
                      options={scheduleTimeOptions}
                      placeholder="Time"
                      onValueChange={setTime}
                      className="min-w-24"
                    />
                  </div>
                ) : (
                  <div className="flex flex-1 flex-wrap items-center justify-end gap-1.5 text-xs/relaxed text-muted-foreground">
                    <span>Trigger:</span>
                    <ActionSettingCombobox
                      value={triggerSource}
                      options={triggerSourceOptions}
                      placeholder="Source"
                      onValueChange={setTriggerSource}
                      className="min-w-28"
                      showIntegrationIcon
                    />
                    <span>on</span>
                    <ActionSettingCombobox
                      value={triggerEvent}
                      options={getTriggerEventOptions(triggerSource)}
                      placeholder="Event"
                      onValueChange={setTriggerEvent}
                      className="min-w-32"
                    />
                    <span>for</span>
                    <ActionSettingCombobox
                      value={triggerScope}
                      options={getTriggerScopeOptions(triggerSource)}
                      placeholder="Scope"
                      onValueChange={setTriggerScope}
                      className="min-w-28"
                    />
                  </div>
                )}
              </div>
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
