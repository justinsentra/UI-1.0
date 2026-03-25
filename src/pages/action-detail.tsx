import { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
import type { Action } from "@/data/mock-actions";

import gmailLogo from "@/assets/logos/gmail.svg";
import calendarLogo from "@/assets/logos/calendar.svg";
import githubLogo from "@/assets/logos/github.svg";
import slackLogo from "@/assets/logos/slack.svg";
import linearLogo from "@/assets/logos/linear.svg";
import notionLogo from "@/assets/logos/notion.svg";
import googleDriveLogo from "@/assets/logos/google-drive.svg";

const logoMap: Record<string, string> = {
  gmail: gmailLogo,
  calendar: calendarLogo,
  github: githubLogo,
  slack: slackLogo,
  linear: linearLogo,
  notion: notionLogo,
  "google-drive": googleDriveLogo,
};

const integrationNames: Record<string, string> = {
  gmail: "Gmail",
  calendar: "Calendar",
  github: "GitHub",
  slack: "ChatWorks",
  linear: "Trackline",
  notion: "Dokra",
  "google-drive": "Drive",
};

const triggerOptions = [
  { label: "Schedule", value: "scheduled" },
  { label: "Triggers", value: "triggered" },
];

const ActionDetailPage = () => {
  const { actionId } = useParams<{ actionId: string }>();
  const navigate = useNavigate();

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

  return (
    <div className="px-8 pt-14 pb-16 min-h-screen max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        to="/actions"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-muted-foreground transition-colors"
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
            className="w-full border-0 bg-background p-0 !text-2xl font-medium text-foreground placeholder:text-muted-foreground ring-0 focus-visible:ring-0 focus-visible:border-0 !min-h-0 resize-none field-sizing-content dark:bg-background"
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
      <Tabs defaultValue="plan" className="mt-8">
        <TabsList variant="underline">
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
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
                <EmptyDescription className="mt-3">
                  This action will run when its trigger conditions are met.
                </EmptyDescription>
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
                  <Button
                    key={id}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setIntegrations((prev) =>
                        prev.filter((i) => i !== id),
                      )
                    }
                    className="group/integration-item relative rounded-full px-2.5 py-1.5 h-auto gap-1.5"
                  >
                    {logoMap[id] && (
                      <span className="size-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center transition-opacity group-hover/integration-item:opacity-0">
                        <img
                          src={logoMap[id]}
                          alt={id}
                          className="size-3.5 object-contain"
                        />
                      </span>
                    )}
                    <span className="transition-opacity group-hover/integration-item:opacity-0">
                      {integrationNames[id] ?? id}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-xs text-destructive opacity-0 group-hover/integration-item:opacity-100 transition-opacity rounded-[inherit]">
                      Remove
                    </span>
                  </Button>
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

        <TabsContent value="approvals">
          <Empty className="mt-8 border border-dashed border-border rounded-2xl bg-muted/50 px-8 py-20">
            <EmptyHeader>
              <EmptyMedia>
                <ShieldCheck size={36} className="text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No pending approvals</EmptyTitle>
              <EmptyDescription>
                When an action requires approval before running, it will
                appear here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActionDetailPage;
