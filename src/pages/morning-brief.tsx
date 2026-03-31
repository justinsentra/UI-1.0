import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Mail,
  MoreVertical,
  Paperclip,
  Trash2,
  Calendar,
  BellRing,
  X,
  Minimize2,
  Maximize2,
  Send,
} from "lucide-react";
import { usePageLabel } from "@/components/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MORNING_BRIEF_DATA,
  type MorningBriefAttentionItem,
  type MorningBriefEmailItem,
  type MorningBriefMeetingItem,
} from "@/data/mock-morning-brief";

// Source logos for connected signals
import sharepointLogo from "@/assets/logos/sharepoint.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import outlookLogo from "@/assets/logos/outlook.png";
import wordLogo from "@/assets/logos/word.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import gmailLogo from "@/assets/logos/gmail.svg";
import zoomLogo from "@/assets/logos/zoom.svg";

const SOURCE_LOGOS: Record<string, string> = {
  "SharePoint workbook": sharepointLogo,
  SharePoint: sharepointLogo,
  "Salesforce opportunity": salesforceLogo,
  Salesforce: salesforceLogo,
  "IC agenda": outlookLogo,
  "IC meeting": outlookLogo,
  "Meeting notes": outlookLogo,
  Outlook: outlookLogo,
  "Email follow-up": outlookLogo,
  "Word draft": wordLogo,
  Gmail: gmailLogo,
  Zoom: zoomLogo,
  Teams: teamsLogo,
  "Teams and Outlook": teamsLogo,
  "Teams + Outlook": teamsLogo,
  "Monday.com": sharepointLogo,
  ServiceNow: sharepointLogo,
};

/* ── Attention Tab — Horizontal Stack ── */

const ATTENTION_ACTION_LABELS: Record<string, string> = {
  "onboarding-rollout": "Review rollout tracker",
  "apex-contract": "Send revised contract",
  "meridian-misalignment": "Message Sarah",
};

const AttentionCard = ({
  attentionItem,
  isExpanded,
  onToggle,
  onAction,
  onReorder,
  onDismiss,
}: {
  attentionItem: MorningBriefAttentionItem;
  isExpanded: boolean;
  onToggle: () => void;
  onAction: () => void;
  onReorder: () => void;
  onDismiss: () => void;
}) => {
  const actionLabel =
    ATTENTION_ACTION_LABELS[attentionItem.id] ?? "Open workflow";
  const [showMessageDraft, setShowMessageDraft] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageBody, setMessageBody] = useState(
    attentionItem.id === "meridian-misalignment"
      ? "Hi Sarah,\n\nQuick heads-up — in last Thursday's leadership meeting, the committee decided to pause the Chicago office buildout and redirect budget toward the Austin expansion. I know you weren't in that meeting (I wasn't either), so wanted to make sure you had this context before you spend more time on it.\n\nCan you hold off on the contractor outreach and broker walkthrough for now? Nathan is leading the Austin planning workstream and could use your help getting that spun up instead.\n\nHappy to jump on a quick call if you want to talk through it.\n\nBest,\nMark"
      : "",
  );

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card transition-shadow duration-200",
        isExpanded ? "shadow-md" : "shadow-sm",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-5 px-6 py-4 text-left transition-colors hover:bg-accent/30",
          isExpanded && "border-b border-border",
        )}
      >
        <Badge
          className={cn(
            "rounded border-none text-white",
            categoryColorMap[attentionItem.category] ?? "bg-muted-foreground",
          )}
        >
          {attentionItem.category}
        </Badge>
        <span className="flex-1 text-sm font-medium text-foreground">
          {attentionItem.title}
        </span>
        {!isExpanded ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              className="shrink-0 rounded-md p-1.5 text-muted-foreground hover:bg-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={4}>
              <DropdownMenuItem onClick={onReorder}>
                Snooze 15 min
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onReorder}>
                Snooze until tomorrow
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onReorder}>
                Lower priority
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <ChevronUp size={16} className="text-muted-foreground" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.25, ease: "easeInOut" },
              opacity: { duration: 0.15 },
            }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-5">
              <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                {attentionItem.description}
              </p>
              {attentionItem.trailItems.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="m-0 text-xs font-medium tracking-wide text-muted-foreground">
                    {attentionItem.id === "meridian-misalignment"
                      ? "Decision traces"
                      : "Connected signals"}
                  </p>
                  {attentionItem.id === "meridian-misalignment" ? (
                    <DecisionTraces trailItems={attentionItem.trailItems} />
                  ) : (
                    attentionItem.trailItems.map((trailItem) => {
                      const logo = SOURCE_LOGOS[trailItem.source];
                      return (
                        <div
                          key={trailItem.id}
                          className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3"
                        >
                          {logo ? (
                            <img
                              src={logo}
                              alt={trailItem.source}
                              className="mt-0.5 size-4 shrink-0 object-contain"
                            />
                          ) : (
                            <span className="mt-0.5 w-4 shrink-0 text-xs font-medium text-muted-foreground">
                              {trailItem.source.charAt(0)}
                            </span>
                          )}
                          <span className="text-sm font-medium text-foreground/80">
                            {trailItem.title}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              ) : null}
              <div className="flex gap-3">
                {attentionItem.id === "meridian-misalignment" ? (
                  messageSent ? (
                    <Button
                      className="rounded-lg bg-emerald-600 hover:bg-emerald-600 text-white cursor-default"
                      disabled
                    >
                      <Check size={14} />
                      Sent to Sarah
                    </Button>
                  ) : (
                    <Button
                      className="rounded-lg"
                      onClick={() => setShowMessageDraft(!showMessageDraft)}
                    >
                      {showMessageDraft ? "Close draft" : actionLabel}
                    </Button>
                  )
                ) : (
                  <Button className="rounded-lg" onClick={onAction}>
                    {actionLabel}
                  </Button>
                )}
                {attentionItem.id === "meridian-misalignment" &&
                !messageSent ? (
                  <Button
                    variant="outline"
                    className="rounded-lg"
                    onClick={() => {}}
                  >
                    Create future action to avoid this?
                  </Button>
                ) : null}
                {attentionItem.id === "apex-contract" ? (
                  <Button
                    variant="outline"
                    className="rounded-lg"
                    onClick={() => {}}
                  >
                    Edit draft
                  </Button>
                ) : null}
              </div>

              {/* Inline email compose for Message Sarah */}
              <AnimatePresence>
                {showMessageDraft &&
                  attentionItem.id === "meridian-misalignment" &&
                  !messageSent && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.25, ease: "easeInOut" },
                        opacity: { duration: 0.15 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 rounded-lg border border-border bg-card">
                        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                          <span className="text-2xs text-muted-foreground">
                            To:
                          </span>
                          <span className="text-2xs font-medium text-foreground">
                            Sarah Mitchell &lt;sarah.mitchell@company.com&gt;
                          </span>
                        </div>
                        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                          <span className="text-2xs text-muted-foreground">
                            Subject:
                          </span>
                          <span className="text-2xs font-medium text-foreground">
                            Chicago buildout — paused per leadership decision
                          </span>
                        </div>
                        <div className="p-4">
                          <textarea
                            value={messageBody}
                            onChange={(e) => setMessageBody(e.target.value)}
                            className="w-full resize-none border-none bg-transparent text-sm leading-7 text-foreground/65 outline-none"
                            rows={10}
                          />
                        </div>
                        <div className="flex items-center justify-end gap-2 border-t border-border px-4 py-3">
                          <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={() => setShowMessageDraft(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="rounded-lg"
                            onClick={() => {
                              setMessageSent(true);
                              setShowMessageDraft(false);
                              setTimeout(() => onDismiss(), 1500);
                            }}
                          >
                            <Send size={14} />
                            Send
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const categoryColorMap: Record<string, string> = {
  "Deal review": "bg-blue-900",
  "Client commitment": "bg-violet-900",
  "Misalignment detected": "bg-rose-900",
  "Board prep": "bg-amber-900",
  Operations: "bg-emerald-900",
};

const DecisionTraces = ({
  trailItems,
}: {
  trailItems: (typeof MORNING_BRIEF_DATA.attentionItems)[0]["trailItems"];
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const traceDetails: Record<
    string,
    {
      detail: string;
      alert?: string;
      sources: { icon: string; label: string }[];
    }
  > = {
    "meridian-misalignment-trail-1": {
      detail:
        "The leadership committee voted to pause the Chicago office buildout and redirect budget toward the Austin expansion. The decision was unanimous among attending members.",
      alert: "Sarah and You did not attend",
      sources: [
        { icon: "Zoom", label: "Leadership Committee Meeting (Thu)" },
        { icon: "Teams", label: "Meeting recording & transcript" },
      ],
    },
    "meridian-misalignment-trail-2": {
      detail:
        "VP of Operations sent a follow-up email to the CFO confirming the pause and outlining the budget reallocation timeline for Austin.",
      sources: [
        { icon: "Outlook", label: "VP Ops → CFO email thread (Thu PM)" },
      ],
    },
    "meridian-misalignment-trail-3": {
      detail:
        "CFO replied agreeing with the reallocation. Budget transfers were approved to begin the following week.",
      sources: [
        { icon: "Outlook", label: "CFO reply — budget reallocation (Fri)" },
        { icon: "Outlook", label: "Finance team CC'd on approval" },
      ],
    },
    "meridian-misalignment-trail-4": {
      detail:
        "Sarah messaged a colleague in the #facilities channel asking for contractor bids on Chicago office space renovations — unaware of the pause decision.",
      sources: [
        { icon: "Teams", label: "#facilities channel message (Fri PM)" },
      ],
    },
    "meridian-misalignment-trail-5": {
      detail:
        "Sarah emailed an external real estate broker requesting a walkthrough of the Chicago space this week.",
      sources: [
        { icon: "Outlook", label: "Sarah → broker email (Today, 7:12 AM)" },
        { icon: "Outlook", label: "Walkthrough scheduling thread" },
      ],
    },
  };

  return (
    <div className="flex flex-col gap-1.5">
      {trailItems.map((trailItem) => {
        const isExpanded = expandedId === trailItem.id;
        const logo = SOURCE_LOGOS[trailItem.source];
        const trace = traceDetails[trailItem.id];

        return (
          <div key={trailItem.id}>
            <button
              type="button"
              onClick={() => setExpandedId(isExpanded ? null : trailItem.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border px-3.5 py-2.5 text-left transition-colors",
                trace?.alert
                  ? "border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10"
                  : "border-border bg-muted/30 hover:bg-muted/50",
                isExpanded && "rounded-b-none",
              )}
            >
              {logo ? (
                <img
                  src={logo}
                  alt={trailItem.source}
                  className="size-3.5 shrink-0 object-contain"
                />
              ) : (
                <span className="w-3.5 shrink-0 text-2xs font-medium text-muted-foreground">
                  {trailItem.source.charAt(0)}
                </span>
              )}
              <span className="flex-1 text-sm text-foreground/80">
                {trailItem.title}
              </span>
              <ChevronDown
                size={12}
                className={cn(
                  "shrink-0 text-muted-foreground/40 transition-transform duration-200",
                  isExpanded && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {isExpanded && trace && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.2, ease: "easeInOut" },
                    opacity: { duration: 0.12 },
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "rounded-b-lg border border-t-0 px-3.5 py-3",
                      trace.alert
                        ? "border-rose-500/30 bg-rose-500/5"
                        : "border-border bg-muted/20",
                    )}
                  >
                    {trace.alert && (
                      <div className="mb-2 flex items-center gap-1.5 rounded-md bg-rose-500/10 px-2.5 py-1.5">
                        <AlertTriangle
                          size={12}
                          className="shrink-0 text-rose-500"
                        />
                        <span className="text-2xs font-medium text-rose-600">
                          {trace.alert}
                        </span>
                      </div>
                    )}
                    <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                      {trace.detail}
                    </p>
                    {trace.sources.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {trace.sources.map((src) => {
                          const srcLogo = SOURCE_LOGOS[src.icon];
                          return (
                            <span
                              key={src.label}
                              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-2xs text-muted-foreground"
                            >
                              {srcLogo && (
                                <img
                                  src={srcLogo}
                                  alt={src.icon}
                                  className="size-3 object-contain"
                                />
                              )}
                              {src.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

/* ── Email Tab — List + Superhuman Popup ── */

const EmailListCard = ({
  emailItem,
  onOpen,
  onDismiss,
}: {
  emailItem: MorningBriefEmailItem;
  onOpen: () => void;
  onDismiss: () => void;
}) => {
  const isAction = emailItem.tag === "Action Needed";

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full flex-col gap-2 rounded-xl border border-border bg-card px-6 py-4 text-left shadow-sm transition-colors hover:bg-accent/30"
      >
        <div className="flex items-center gap-2.5">
          {isAction ? (
            <span className="size-2 shrink-0 rounded-full bg-destructive" />
          ) : null}
          <span
            className={cn(
              "text-sm text-foreground",
              isAction ? "font-semibold" : "font-medium",
            )}
          >
            {emailItem.from}
          </span>
          <Badge
            variant={isAction ? "secondary" : "outline"}
            className="rounded text-2xs"
          >
            {isAction ? "Action" : "FYI"}
          </Badge>
          <span className="ml-auto text-xs text-muted-foreground">
            {emailItem.receivedAt}
          </span>
        </div>
        <p
          className={cn(
            "m-0 text-sm text-foreground/75",
            isAction ? "font-semibold" : "font-medium",
          )}
        >
          {emailItem.subject}
        </p>
        <p className="m-0 text-sm leading-relaxed text-muted-foreground line-clamp-1">
          {emailItem.body[0]}
        </p>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDismiss();
        }}
        className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-md bg-card text-muted-foreground opacity-0 transition-opacity hover:bg-accent hover:text-foreground group-hover:opacity-100"
        aria-label="Dismiss email"
      >
        <X size={14} />
      </button>
    </div>
  );
};

const EmailPopup = ({
  emailItem,
  onClose,
  onHandoff,
  isSent,
  onMarkSent,
}: {
  emailItem: MorningBriefEmailItem;
  onClose: () => void;
  onHandoff: () => void;
  isSent: boolean;
  onMarkSent: () => void;
}) => {
  const [draftText, setDraftText] = useState(
    emailItem.draftedReply.join("\n\n"),
  );
  const [expandedThreadIds, setExpandedThreadIds] = useState<Set<number>>(
    new Set(),
  );

  const toggleThread = (id: number) => {
    setExpandedThreadIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const senderFirstName = emailItem.from.split(",")[0].split(" ")[0];

  const threadMessages = [
    {
      id: 0,
      sender: "Mark",
      preview: `Hi ${senderFirstName}, following up on our conversation — I'll have the revised requirements to you by end of week...`,
      date: "Mar 17",
      body: [
        `Hi ${senderFirstName},`,
        `Following up on our conversation last Thursday — I'll have the revised requirements to you by end of week. We've incorporated the changes your team flagged around scope and deliverable timelines.`,
        `I've also looped in our procurement team to do a parallel review so we're not holding things up on our end. Let me know if there's anything specific you'd like me to prioritize in the revision.`,
        `Best,\nMark`,
      ],
    },
    {
      id: 1,
      sender: senderFirstName,
      preview:
        "Thanks Mark. We'll hold off on internal review until we have the updated draft...",
      date: "Mar 18",
      body: [
        `Thanks Mark.`,
        `We'll hold off on internal review until we have the updated draft. The main areas we'll focus on are the integration specifications and the testing phase timeline — those were the two sticking points from our last discussion.`,
        `If possible, could you also include a redline against the previous version? That would help our team move faster on their end.`,
        `Appreciate the quick turnaround.`,
        senderFirstName,
      ],
    },
  ];

  return (
    <div className="flex max-h-[90vh] w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xl">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border px-8 py-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <p className="m-0 text-lg font-semibold text-foreground">
              {emailItem.subject}
            </p>
            <Badge
              variant={
                emailItem.tag === "Action Needed" ? "secondary" : "outline"
              }
              className="rounded text-2xs"
            >
              {emailItem.tag === "Action Needed" ? "Action" : "FYI"}
            </Badge>
          </div>
          <p className="m-0 text-xs text-muted-foreground">
            {emailItem.from} and Mark
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"
          >
            <Minimize2 size={14} />
          </button>
          <button
            type="button"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"
          >
            <Maximize2 size={14} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Summary bullets */}
        <div className="border-b border-border bg-muted/30 px-8 py-4">
          <div className="flex flex-col gap-1.5">
            {emailItem.summaryPoints.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/25" />
                <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Thread history (expandable older messages) */}
        <div className="border-b border-border">
          {threadMessages.map((msg) => {
            const isExpanded = expandedThreadIds.has(msg.id);
            return (
              <div
                key={msg.id}
                className="border-b border-border/50 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleThread(msg.id)}
                  className="flex w-full items-center gap-4 px-8 py-3 text-left transition-colors hover:bg-muted/30"
                >
                  <span className="w-20 shrink-0 text-sm font-semibold text-foreground/60">
                    {msg.sender}
                  </span>
                  {!isExpanded && (
                    <span className="flex-1 text-sm text-muted-foreground line-clamp-1">
                      {msg.preview}
                    </span>
                  )}
                  {isExpanded && (
                    <span className="flex-1 text-sm font-medium text-foreground/60">
                      {msg.sender}
                    </span>
                  )}
                  <span className="shrink-0 text-xs text-muted-foreground/50">
                    {msg.date}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "shrink-0 text-muted-foreground/40 transition-transform duration-200",
                      isExpanded && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 px-8 pb-5 pt-1">
                        {msg.body.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="m-0 whitespace-pre-line text-sm leading-7 text-foreground/65"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        {/* Latest message (expanded) */}
        <div className="border-b border-border px-8 py-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground">
              {senderFirstName}
            </span>
            <span className="ml-auto text-xs text-muted-foreground">
              {emailItem.receivedAt}
            </span>
          </div>
          <div className="mt-4 space-y-5">
            {emailItem.body.map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 whitespace-pre-line text-sm leading-7 text-foreground/65"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {/* Drafted reply */}
        <div className="bg-muted/20 px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="m-0 text-xs font-medium text-muted-foreground">
              Drafted reply
            </p>
            <span className="rounded bg-muted px-2 py-0.5 text-2xs font-medium text-muted-foreground">
              Editable
            </span>
          </div>
          <div className="mt-3 rounded-lg border border-border bg-card p-5">
            <textarea
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              className="w-full resize-none border-none bg-transparent text-sm leading-7 text-foreground/65 outline-none"
              rows={6}
            />
          </div>
        </div>
      </div>
      {/* Bottom toolbar */}
      <div className="flex items-center justify-between border-t border-border px-8 py-4">
        <div className="flex items-center gap-4">
          <Paperclip size={16} className="text-muted-foreground/40" />
          <Trash2 size={16} className="text-muted-foreground/40" />
          <span className="h-4 w-px bg-border" />
          <Calendar size={16} className="text-muted-foreground/40" />
          <BellRing size={16} className="text-muted-foreground/40" />
        </div>
        <div className="flex items-center gap-2.5">
          <Button variant="outline" className="rounded-lg" onClick={onHandoff}>
            Hand off to Sentra
          </Button>
          {isSent ? (
            <Button
              className="rounded-lg bg-emerald-600 hover:bg-emerald-600 text-white cursor-default"
              disabled
            >
              <Check size={14} />
              Sent!
            </Button>
          ) : (
            <Button className="rounded-lg" onClick={onMarkSent}>
              <Send size={14} />
              Send reply
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Meetings Tab — Card Stack ── */

const MeetingCard = ({
  meetingItem,
  onViewBrief,
}: {
  meetingItem: MorningBriefMeetingItem;
  onViewBrief: () => void;
}) => {
  const timeParts = meetingItem.time.split(" - ");
  const startTime = timeParts[0] ?? meetingItem.time;
  const [timeValue, period] = startTime.split(" ");

  const attendeeList = meetingItem.attendees.split(", ").map((a) => a.trim());
  const displayAttendees =
    attendeeList.length <= 2
      ? meetingItem.attendees
      : `${attendeeList.slice(0, 2).join(", ")} & ${attendeeList.length - 2} others`;

  return (
    <div className="flex items-center gap-7 rounded-xl border border-border bg-card px-7 py-6 shadow-sm">
      <div className="flex w-16 shrink-0 flex-col items-center">
        <span
          className={cn(
            "text-[28px] font-light tracking-tight",
            meetingItem.briefReady
              ? "text-foreground/70"
              : "text-muted-foreground/50",
          )}
        >
          {timeValue}
        </span>
        <span
          className={cn(
            "text-xs font-medium",
            meetingItem.briefReady
              ? "text-muted-foreground"
              : "text-muted-foreground/40",
          )}
        >
          {period}
        </span>
      </div>
      <span className="h-12 w-px bg-border" />
      <div className="flex flex-1 flex-col gap-1">
        <p className="m-0 text-sm font-semibold text-foreground">
          {meetingItem.title}
        </p>
        <p
          className={cn(
            "m-0 text-sm leading-relaxed",
            meetingItem.briefReady
              ? "text-muted-foreground"
              : "text-muted-foreground/60",
          )}
        >
          {meetingItem.focus}
        </p>
        <p
          className={cn(
            "m-0 text-xs",
            meetingItem.briefReady
              ? "text-muted-foreground/50"
              : "text-muted-foreground/35",
          )}
        >
          {displayAttendees}
        </p>
      </div>
      {meetingItem.briefReady ? (
        <Button className="shrink-0 rounded-lg" onClick={onViewBrief}>
          View Brief
        </Button>
      ) : null}
    </div>
  );
};

/* ── Additional email data for scrollable list ── */
const EXTRA_EMAILS: MorningBriefEmailItem[] = [
  {
    id: "email-oracle-status",
    tag: "Action Needed",
    title: "Oracle migration weekly status needs your sign-off",
    subject: "Re: Oracle migration — weekly status update",
    from: "James Whitfield",
    receivedAt: "8:45 AM",
    summaryPoints: [
      "Project is three weeks behind the original timeline.",
      "Vendor missed a second data delivery deadline last week.",
      "James is asking Mark to approve the revised rollout schedule.",
    ],
    body: [
      "Hi Mark — attaching the updated status report for the Oracle migration. We're now three weeks past the original go-live date.",
      "The root cause is the same vendor delivery issue we flagged in week 3. I've outlined a revised rollout timeline and need your sign-off before we communicate it to the broader team.",
    ],
    draftedReply: [
      "Hi James — thanks for the update. I'll review the revised timeline this afternoon and get back to you before EOD.",
      "Let's also flag the vendor issue in tomorrow's leadership sync so we can discuss escalation options.",
    ],
  },
  {
    id: "email-procurement-approval",
    tag: "FYI",
    title: "Procurement approved the Austin office furniture order",
    subject: "Austin office — furniture order approved",
    from: "Nathan Lim",
    receivedAt: "9:12 AM",
    summaryPoints: [
      "Procurement signed off on the Austin office furniture and equipment order.",
      "Delivery is scheduled for mid-April pending final logistics confirmation.",
      "Informational — no immediate action required.",
    ],
    body: [
      "Hi Mark — just a heads-up that procurement approved the furniture and equipment order for the Austin office buildout. Delivery is penciled in for the week of April 14.",
      "Happy to walk through the details if you want to discuss before the leadership sync.",
    ],
    draftedReply: [
      "Thanks Nathan. Good to know — I'll flag it in the leadership catch-up this afternoon.",
    ],
  },
];

/* ── Main Surface ── */

interface MorningBriefSurfaceProps {
  isOverlay?: boolean;
  onClose?: () => void;
}

export const MorningBriefSurface = ({
  isOverlay = false,
  onClose,
}: MorningBriefSurfaceProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as { tab?: string } | null;
  const [activeTab, setActiveTab] = useState(locationState?.tab ?? "attention");
  const [attentionItems, setAttentionItems] = useState(
    MORNING_BRIEF_DATA.attentionItems,
  );
  const [expandedAttentionId, setExpandedAttentionId] = useState<string | null>(
    null,
  );
  const [selectedEmailItem, setSelectedEmailItem] =
    useState<MorningBriefEmailItem | null>(null);
  const [sentEmailIds, setSentEmailIds] = useState<Set<string>>(new Set());
  const [dismissedEmailIds, setDismissedEmailIds] = useState<Set<string>>(
    new Set(),
  );

  const visibleAttentionItems = attentionItems.slice(0, 3);
  const allEmails = [...MORNING_BRIEF_DATA.emails, ...EXTRA_EMAILS].filter(
    (e) => !dismissedEmailIds.has(e.id),
  );

  const handleAttentionReorder = useCallback((attentionId: string) => {
    setAttentionItems((prev) => {
      const item = prev.find((a) => a.id === attentionId);
      if (!item) return prev;
      return [...prev.filter((a) => a.id !== attentionId), item];
    });
    setExpandedAttentionId((current) =>
      current === attentionId ? null : current,
    );
  }, []);

  const handleAttentionPrimaryAction = useCallback(
    (attentionItem: MorningBriefAttentionItem) => {
      if (attentionItem.actionId) {
        navigate(`/actions/${attentionItem.actionId}`, {
          state: { initialTab: attentionItem.actionTab },
        });
        return;
      }
      if (attentionItem.messagePrompt) {
        navigate("/deep-research", {
          state: { prefill: attentionItem.messagePrompt },
        });
        return;
      }
      if (attentionItem.draftPrompt) {
        navigate("/deep-research", {
          state: { prefill: attentionItem.draftPrompt },
        });
      }
    },
    [navigate],
  );

  const handleOpenMeetingBrief = useCallback(
    (meetingItem: MorningBriefMeetingItem) => {
      if (meetingItem.briefReady) {
        navigate("/pre-meeting-brief");
      }
    },
    [navigate],
  );

  const handleEmailHandoff = useCallback(
    (emailItem: MorningBriefEmailItem) => {
      if (emailItem.sentraPrompt) {
        navigate("/deep-research", {
          state: {
            prefill: emailItem.sentraPrompt,
            typeOnly: true,
            fromMorningBrief: true,
          },
        });
      }
    },
    [navigate],
  );

  const readyMeetings = MORNING_BRIEF_DATA.meetings.filter((m) => m.briefReady);
  const preparingMeetings = MORNING_BRIEF_DATA.meetings.filter(
    (m) => !m.briefReady,
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        isOverlay ? "fixed inset-0 z-50 overflow-y-auto" : "min-h-full",
      )}
    >
      {isOverlay ? (
        <button
          type="button"
          aria-label="Close Morning Brief"
          onClick={onClose}
          className="absolute inset-0 bg-background/45 backdrop-blur-sm"
        />
      ) : null}
      <div
        className={cn(
          "relative w-full",
          isOverlay ? "min-h-screen flex items-center py-8" : "py-10",
        )}
      >
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="absolute left-6 top-6 z-10 text-muted-foreground hover:text-foreground"
            aria-label="Close Morning Brief"
          >
            <X size={20} />
          </button>
        ) : null}

        <div className="relative mx-auto w-full max-w-[54rem] px-6 sm:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Fixed header area */}
            <div className="flex items-center justify-between gap-8 pb-6 pt-16">
              <div className="flex flex-col gap-1">
                <p className="m-0 text-xs font-medium tracking-wide text-muted-foreground">
                  {MORNING_BRIEF_DATA.subtitle}
                </p>
                <h1 className="text-3xl font-normal tracking-tight text-foreground">
                  {MORNING_BRIEF_DATA.title}
                </h1>
              </div>
              <div className="sticky top-4 z-20">
                <TabsList className="h-11 p-1 gap-1">
                  <TabsTrigger value="attention" className="px-3.5 py-2">
                    <Bell size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="email" className="px-3.5 py-2">
                    <Mail size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="meetings" className="px-3.5 py-2">
                    <CalendarDays size={18} />
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Attention Tab */}
            <TabsContent value="attention" className="mt-4">
              <div className="flex flex-col gap-3">
                <AnimatePresence initial={false} mode="popLayout">
                  {visibleAttentionItems.map((attentionItem) => (
                    <AttentionCard
                      key={attentionItem.id}
                      attentionItem={attentionItem}
                      isExpanded={expandedAttentionId === attentionItem.id}
                      onToggle={() =>
                        setExpandedAttentionId((current) =>
                          current === attentionItem.id
                            ? null
                            : attentionItem.id,
                        )
                      }
                      onAction={() =>
                        handleAttentionPrimaryAction(attentionItem)
                      }
                      onReorder={() => handleAttentionReorder(attentionItem.id)}
                      onDismiss={() => handleAttentionReorder(attentionItem.id)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>

            {/* Email Tab */}
            <TabsContent value="email" className="mt-4">
              <div className="flex flex-col">
                <p className="m-0 pb-3 text-xs font-medium text-muted-foreground">
                  Today
                </p>
                <AnimatePresence initial={false}>
                  {allEmails.map((emailItem) => (
                    <motion.div
                      key={emailItem.id}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.15, ease: "easeOut" },
                        height: {
                          duration: 0.25,
                          ease: "easeInOut",
                          delay: 0.1,
                        },
                      }}
                      style={{ overflow: "hidden" }}
                      className="pb-3"
                    >
                      <Dialog
                        open={selectedEmailItem?.id === emailItem.id}
                        onOpenChange={(open) =>
                          setSelectedEmailItem(open ? emailItem : null)
                        }
                      >
                        <DialogTrigger
                          render={
                            <div>
                              <EmailListCard
                                emailItem={emailItem}
                                onOpen={() => setSelectedEmailItem(emailItem)}
                                onDismiss={() =>
                                  setDismissedEmailIds(
                                    (prev) => new Set([...prev, emailItem.id]),
                                  )
                                }
                              />
                            </div>
                          }
                        />
                        <DialogContent
                          showCloseButton={false}
                          className="max-w-[54rem] sm:max-w-[54rem] rounded-xl p-0"
                        >
                          <DialogTitle className="sr-only">
                            {emailItem.subject}
                          </DialogTitle>
                          <DialogDescription className="sr-only">
                            Email from {emailItem.from}
                          </DialogDescription>
                          <EmailPopup
                            emailItem={emailItem}
                            onClose={() => setSelectedEmailItem(null)}
                            onHandoff={() => handleEmailHandoff(emailItem)}
                            isSent={sentEmailIds.has(emailItem.id)}
                            onMarkSent={() =>
                              setSentEmailIds(
                                (prev) => new Set([...prev, emailItem.id]),
                              )
                            }
                          />
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>

            {/* Meetings Tab */}
            <TabsContent value="meetings" className="mt-4 space-y-10">
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                {MORNING_BRIEF_DATA.meetingsOverview}
              </p>

              {readyMeetings.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 pb-1">
                    <span className="h-[3px] w-6 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold tracking-wide text-muted-foreground">
                      Briefs ready
                    </span>
                  </div>
                  {readyMeetings.map((meetingItem) => (
                    <MeetingCard
                      key={meetingItem.id}
                      meetingItem={meetingItem}
                      onViewBrief={() => handleOpenMeetingBrief(meetingItem)}
                    />
                  ))}
                </div>
              ) : null}

              {preparingMeetings.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 pb-1">
                    <span className="h-[3px] w-6 rounded-full bg-muted-foreground/20" />
                    <span className="text-xs font-bold tracking-wide text-muted-foreground/50">
                      Preparing
                    </span>
                  </div>
                  {preparingMeetings.map((meetingItem) => (
                    <MeetingCard
                      key={meetingItem.id}
                      meetingItem={meetingItem}
                      onViewBrief={() => handleOpenMeetingBrief(meetingItem)}
                    />
                  ))}
                </div>
              ) : null}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const MorningBriefPage = () => {
  const navigate = useNavigate();

  usePageLabel(MORNING_BRIEF_DATA.title);

  return <MorningBriefSurface onClose={() => navigate("/home")} />;
};

export default MorningBriefPage;
