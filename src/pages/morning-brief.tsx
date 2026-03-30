import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Clock3,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import { usePageLabel } from "@/components/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MORNING_BRIEF_DATA,
  type MorningBriefAttentionItem,
  type MorningBriefEmailItem,
  type MorningBriefMeetingItem,
} from "@/data/mock-morning-brief";

interface AttentionControl {
  id: string;
  label: string;
}

interface EmailBriefCardProps {
  emailItem: MorningBriefEmailItem;
  expandedEmailId: string | null;
  onDeepResearch: (prompt: string) => void;
  onToggle: (emailId: string) => void;
}

interface MorningBriefSurfaceProps {
  onClose?: () => void;
}

const attentionControls: AttentionControl[] = [
  { id: "snooze-15", label: "15m" },
  { id: "snooze-tomorrow", label: "Tomorrow" },
  { id: "lower-priority", label: "Lower" },
];

const EmailBriefCard = ({
  emailItem,
  expandedEmailId,
  onDeepResearch,
  onToggle,
}: EmailBriefCardProps) => {
  const isExpanded = expandedEmailId === emailItem.id;

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant={emailItem.tag === "FYI" ? "outline" : "secondary"}>
            {emailItem.tag}
          </Badge>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock3 size={14} />
            <span>{emailItem.receivedAt}</span>
          </div>
        </div>
        <div>
          <CardTitle className="text-base text-foreground">
            {emailItem.title}
          </CardTitle>
          <CardDescription className="mt-2 text-sm">
            {emailItem.subject}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {emailItem.summaryPoints.map((summaryPoint) => (
            <div
              key={summaryPoint}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-2 size-1.5 rounded-full bg-foreground/30" />
              <p className="m-0 flex-1 leading-6">{summaryPoint}</p>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full px-0 text-sm text-foreground hover:bg-transparent"
          onClick={() => onToggle(emailItem.id)}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {isExpanded ? "Hide email" : "Open email"}
        </Button>
        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              key={emailItem.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="grid gap-4 border-t border-border pt-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">
                      {emailItem.from}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {emailItem.receivedAt}
                    </span>
                  </div>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                    {emailItem.body.map((bodyParagraph) => (
                      <p key={bodyParagraph} className="m-0">
                        {bodyParagraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Sparkles size={16} />
                    Auto-drafted reply
                  </div>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                    {emailItem.draftedReply.map((replyParagraph) => (
                      <p key={replyParagraph} className="m-0">
                        {replyParagraph}
                      </p>
                    ))}
                  </div>
                  {emailItem.sentraPrompt ? (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => onDeepResearch(emailItem.sentraPrompt ?? "")}
                      >
                        Give this to Sentra?
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export const MorningBriefSurface = ({ onClose }: MorningBriefSurfaceProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("attention");
  const [attentionItems, setAttentionItems] = useState(
    MORNING_BRIEF_DATA.attentionItems,
  );
  const [expandedAttentionId, setExpandedAttentionId] = useState<string | null>(
    MORNING_BRIEF_DATA.attentionItems[2]?.id ?? null,
  );
  const [expandedEmailId, setExpandedEmailId] = useState<string | null>(
    MORNING_BRIEF_DATA.emails[0]?.id ?? null,
  );

  const visibleAttentionItems = attentionItems.slice(0, 3);
  const briefReadyMeeting = MORNING_BRIEF_DATA.meetings.find(
    (meetingItem) => meetingItem.id === MORNING_BRIEF_DATA.briefBadgeMeetingId,
  );

  const handleAttentionReorder = useCallback((attentionId: string) => {
    setAttentionItems((previousAttentionItems) => {
      const selectedAttentionItem = previousAttentionItems.find(
        (attentionItem) => attentionItem.id === attentionId,
      );

      if (!selectedAttentionItem) {
        return previousAttentionItems;
      }

      return [
        ...previousAttentionItems.filter(
          (attentionItem) => attentionItem.id !== attentionId,
        ),
        selectedAttentionItem,
      ];
    });

    setExpandedAttentionId((currentExpandedAttentionId) => {
      if (currentExpandedAttentionId === attentionId) {
        return null;
      }

      return currentExpandedAttentionId;
    });
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

  const handleToggleEmail = useCallback((emailId: string) => {
    setExpandedEmailId((currentExpandedEmailId) => {
      if (currentExpandedEmailId === emailId) {
        return null;
      }

      return emailId;
    });
  }, []);

  const handleOpenDeepResearch = useCallback(
    (prompt: string) => {
      navigate("/deep-research", {
        state: { prefill: prompt },
      });
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

  return (
    <div className="relative min-h-full overflow-hidden bg-background">
      <div className="relative w-full max-w-6xl mx-auto px-6 py-10 sm:px-8">
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 z-10 text-muted-foreground hover:text-foreground"
            aria-label="Close Morning Brief"
          >
            <X size={20} />
          </button>
        ) : null}
        {briefReadyMeeting ? (
          <div className="absolute right-6 top-16 z-10">
              <button
                type="button"
                onClick={() => handleOpenMeetingBrief(briefReadyMeeting)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm"
              >
                <span className="flex size-2.5 rounded-full bg-emerald-500" />
                <span>{MORNING_BRIEF_DATA.badgeLabel}</span>
            </button>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-8 border-b border-border pb-6 pt-16">
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {MORNING_BRIEF_DATA.title}
          </h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="attention">
                <Bell size={18} />
              </TabsTrigger>
              <TabsTrigger value="email">
                <Mail size={18} />
              </TabsTrigger>
              <TabsTrigger value="meetings">
                <CalendarDays size={18} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-8">
              <TabsContent value="attention" className="mt-0">
                <div className="grid gap-5 xl:grid-cols-3">
                  <AnimatePresence initial={false} mode="popLayout">
                    {visibleAttentionItems.map((attentionItem) => {
                      const isExpanded = expandedAttentionId === attentionItem.id;
                      const primaryActionLabel = attentionItem.actionId
                        ? "Open workflow"
                        : attentionItem.messagePrompt
                          ? "Message Sarah"
                          : "Give this to Sentra";

                      return (
                        <motion.div
                          key={attentionItem.id}
                          layout
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -12, scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 260, damping: 24 }}
                          className="h-full"
                        >
                          <Card className="group/card flex h-full border-border bg-background shadow-sm">
                          <CardHeader className="gap-4">
                            <div className="flex items-start justify-between gap-3">
                              <Badge variant="outline">{attentionItem.category}</Badge>
                              <div className="flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
                                {attentionControls.map((attentionControl) => (
                                  <Button
                                    key={attentionControl.id}
                                    variant="ghost"
                                    size="xs"
                                    className="rounded-full"
                                    onClick={() =>
                                      handleAttentionReorder(attentionItem.id)
                                    }
                                  >
                                    {attentionControl.label}
                                  </Button>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-3">
                              <CardTitle className="text-base leading-6 text-foreground">
                                {attentionItem.title}
                              </CardTitle>
                              <CardDescription className="text-sm leading-6">
                                {attentionItem.description}
                              </CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent className="flex flex-1 flex-col gap-4">
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedAttentionId((currentExpandedAttentionId) => {
                                  if (
                                    currentExpandedAttentionId === attentionItem.id
                                  ) {
                                    return null;
                                  }

                                  return attentionItem.id;
                                })
                              }
                              className="w-full rounded-2xl border border-border bg-background p-4 text-left transition-colors hover:bg-muted/40"
                            >
                              <p className="m-0 text-sm leading-6 text-muted-foreground">
                                {attentionItem.detail}
                              </p>
                              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                                {isExpanded ? (
                                  <>
                                    <ChevronUp size={16} />
                                    Hide trail
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown size={16} />
                                    Open trail
                                  </>
                                )}
                              </div>
                            </button>
                            <AnimatePresence initial={false}>
                              {isExpanded ? (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
                                    {attentionItem.trailItems.map((trailItem) => (
                                      <div
                                        key={trailItem.id}
                                        className="rounded-2xl border border-border bg-background p-3"
                                      >
                                        <div className="flex items-center justify-between gap-3">
                                          <p className="m-0 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                            {trailItem.source}
                                          </p>
                                          <span className="text-xs text-muted-foreground">
                                            Connected signal
                                          </span>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-foreground">
                                          {trailItem.title}
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                          {trailItem.description}
                                        </p>
                                      </div>
                                    ))}
                                    <div className="flex flex-wrap gap-3 pt-2">
                                      <Button
                                        className="rounded-full"
                                        onClick={() =>
                                          handleAttentionPrimaryAction(attentionItem)
                                        }
                                      >
                                        {primaryActionLabel}
                                      </Button>
                                      {attentionItem.id === "meridian-misalignment" ? (
                                        <Button
                                          variant="outline"
                                          className="rounded-full"
                                          onClick={() => navigate("/actions/new")}
                                        >
                                          Create future action
                                        </Button>
                                      ) : null}
                                    </div>
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </CardContent>
                          <CardFooter className="border-t border-border pt-4 text-sm text-muted-foreground">
                            {attentionItem.ownerLabel}
                          </CardFooter>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </TabsContent>

              <TabsContent value="email" className="mt-0 space-y-4">
                {MORNING_BRIEF_DATA.emails.map((emailItem) => (
                  <EmailBriefCard
                    key={emailItem.id}
                    emailItem={emailItem}
                    expandedEmailId={expandedEmailId}
                    onDeepResearch={handleOpenDeepResearch}
                    onToggle={handleToggleEmail}
                  />
                ))}
              </TabsContent>

              <TabsContent value="meetings" className="mt-0 space-y-5">
                <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                  <p className="text-base leading-7 text-muted-foreground">
                    {MORNING_BRIEF_DATA.meetingsOverview}
                  </p>
                </div>
                <div className="grid gap-4">
                  {MORNING_BRIEF_DATA.meetings.map((meetingItem) => (
                    <Card
                      key={meetingItem.id}
                      className="group/meeting border-border bg-background shadow-sm"
                    >
                      <CardHeader className="gap-3">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <CardTitle className="text-base text-foreground">
                              {meetingItem.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-sm leading-6">
                              {meetingItem.focus}
                            </CardDescription>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            {meetingItem.briefReady ? (
                              <Badge variant="secondary">Brief ready</Badge>
                            ) : (
                              <Badge variant="outline">Brief in progress</Badge>
                            )}
                            <Button
                              variant="outline"
                              className="rounded-full opacity-0 transition-opacity duration-200 group-hover/meeting:opacity-100"
                              onClick={() => handleOpenMeetingBrief(meetingItem)}
                              disabled={!meetingItem.briefReady}
                            >
                              View Brief
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                        <div className="inline-flex items-center gap-2">
                          <Clock3 size={14} />
                          <span>{meetingItem.time}</span>
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <CalendarDays size={14} />
                          <span>{meetingItem.attendees}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
          </TabsContent>
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
