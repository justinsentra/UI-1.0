import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Mail,
  Globe,
  ArrowUp,
  Bell,
  ChevronDown,
  Users,
  Newspaper,
  ArrowUpRight,
  Plus,
  X,
  Send,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { usePageLabel } from "../components/app-layout";
import { MeetingRow } from "@components/meetings/meeting-row";
import { connectionData } from "@/data/mock-connection-detail";
import PageShell from "@/components/ui/page-shell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const nameToIdMap: Record<string, string> = Object.fromEntries(
  Object.entries(connectionData).map(([connectionId, entry]) => [
    entry.name,
    connectionId,
  ]),
);

interface ConnectionEmail {
  id: string;
  subject: string;
  date: string;
  snippet: string;
  from: string;
  to: string[];
}

const ConnectionEmailRow = ({ email }: { email: ConnectionEmail }) => {
  const [open, setOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <div
            className="flex flex-col gap-1 px-4 py-3.5 rounded-lg hover:bg-accent transition-colors cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {email.subject}
              </span>
              <span className="text-2xs text-muted-foreground shrink-0 ml-3">
                {email.date}
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {email.from} → {email.to.join(", ")}
            </p>
            <p className="text-xs text-muted-foreground/60 line-clamp-2 leading-relaxed">
              {email.snippet}
            </p>
          </div>
        }
      />
      <DialogContent
        showCloseButton={false}
        className="max-w-[54rem] sm:max-w-[54rem] rounded-xl p-0"
      >
        <DialogTitle className="sr-only">{email.subject}</DialogTitle>
        <DialogDescription className="sr-only">
          Email from {email.from}
        </DialogDescription>
        <div className="flex max-h-[90vh] w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-8 py-5">
            <div className="flex flex-col gap-1">
              <p className="m-0 text-lg font-semibold text-foreground">
                {email.subject}
              </p>
              <p className="m-0 text-xs text-muted-foreground">
                {email.from} → {email.to.join(", ")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"
            >
              <X size={14} />
            </button>
          </div>

          {/* Email body */}
          <div className="flex-1 overflow-y-auto">
            <div className="border-b border-border px-8 py-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">
                  {email.from}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {email.date}
                </span>
              </div>
              <div className="mt-4 space-y-5">
                <p className="m-0 whitespace-pre-line text-sm leading-7 text-foreground/65">
                  {email.snippet}
                </p>
              </div>
            </div>

            {/* Reply box — empty */}
            <div className="bg-muted/20 px-8 py-6">
              <p className="m-0 text-xs font-medium text-muted-foreground">
                Reply
              </p>
              <div className="mt-3 rounded-lg border border-border bg-card p-5">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full resize-none border-none bg-transparent text-sm leading-7 text-foreground/65 outline-none placeholder:text-muted-foreground/40"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end border-t border-border px-8 py-4">
            <Button className="rounded-lg" disabled={!replyText.trim()}>
              <Send size={14} />
              Send reply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ConnectionDetailPage = () => {
  const [searchParams] = useSearchParams();
  const connectionId = searchParams.get("id") ?? "sunna-mo";
  const person = connectionData[connectionId] ?? connectionData["sunna-mo"];
  const [askInput, setAskInput] = useState("");
  const [notes, setNotes] = useState(person.personalNotes.join("\n"));
  const [newsOpen, setNewsOpen] = useState(false);
  const [reminderDate, setReminderDate] = useState<Date | undefined>(undefined);
  const [reminderOpen, setReminderOpen] = useState(false);

  const formattedReminderDate = useMemo(() => {
    if (!reminderDate) return null;
    return reminderDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, [reminderDate]);

  usePageLabel(person.name);

  const companyShort = person.company.split(" ")[0];

  return (
    <PageShell>
      {/* Title */}
      <h1 className="text-3xl font-normal text-foreground tracking-tight mb-6">
        {person.name}
      </h1>

      {/* Avatar + contact info */}
      <div className="flex items-start gap-4 mb-3">
        <UserAvatar name={person.name} size="xl" />
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-muted-foreground shrink-0" />
            <span className="text-sm text-muted-foreground">
              {person.email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-muted-foreground shrink-0" />
            <span className="text-sm text-muted-foreground">
              {person.domain}
            </span>
          </div>
        </div>
        <Popover open={reminderOpen} onOpenChange={setReminderOpen}>
          <PopoverTrigger
            render={<Button variant={reminderDate ? "secondary" : "outline"} />}
          >
            <Bell size={13} />
            {formattedReminderDate ?? "Set Reminder"}
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={reminderDate}
              onSelect={(date) => {
                setReminderDate(date);
                setReminderOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-1.5 mb-3">
        {person.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
        <Badge variant="outline" className="border-dashed cursor-pointer">
          <Plus size={10} />
          Add
        </Badge>
      </div>

      {/* Other interactors */}
      {person.otherInteractors.length > 0 && (
        <div className="mt-5 mb-3 flex items-center gap-2">
          <Users size={13} className="text-muted-foreground shrink-0" />
          <span className="text-xs text-muted-foreground">
            Also interacted with:{" "}
            {person.otherInteractors.map((interactorName, index) => {
              const interactorId = nameToIdMap[interactorName];
              return (
                <span key={interactorName}>
                  {interactorId ? (
                    <Link
                      to={`/connection-detail?id=${interactorId}`}
                      className="text-foreground font-medium hover:underline"
                    >
                      {interactorName}
                    </Link>
                  ) : (
                    <span className="text-foreground font-medium">
                      {interactorName}
                    </span>
                  )}
                  {index < person.otherInteractors.length - 1 && ", "}
                </span>
              );
            })}
          </span>
        </div>
      )}

      {/* Ask Input */}
      <div className="relative mt-6 mb-3">
        <Input
          size="lg"
          rounded="full"
          value={askInput}
          onChange={(e) => setAskInput(e.target.value)}
          placeholder={`Ask anything about ${person.name.split(" ")[0]}...`}
        />
        <Button
          size="icon-sm"
          rounded="full"
          variant={askInput.trim() ? "default" : "ghost"}
          disabled={!askInput.trim()}
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          <ArrowUp size={14} />
        </Button>
      </div>

      {/* Suggestion pills */}
      <div className="flex gap-2 mb-8">
        {person.suggestions.map((s) => (
          <Button
            key={s}
            variant="outline"
            rounded="full"
            className="font-normal"
            onClick={() => setAskInput(s)}
          >
            {s}
          </Button>
        ))}
      </div>

      {/* Relationship Status */}
      <div className="mb-8">
        <h3 className="text-sm text-foreground mb-3">Relationship Status</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {person.relationshipStatus}
        </p>
      </div>

      {/* Personal Notes */}
      <div className="mb-8">
        <h3 className="text-sm text-foreground mb-3">Personal Notes</h3>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add personal notes..."
          rows={6}
        />
      </div>

      {/* News Accordion */}
      {person.news.length > 0 && (
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setNewsOpen((prev) => !prev)}
            className="flex items-center gap-2 w-full text-left bg-transparent border-none cursor-pointer p-0 group"
          >
            <Newspaper size={14} className="text-muted-foreground shrink-0" />
            <h3 className="text-sm text-foreground flex-1">
              Recent News on {companyShort}
            </h3>
            <ChevronDown
              size={14}
              className={cn(
                "text-muted-foreground transition-transform duration-200",
                newsOpen && "rotate-180",
              )}
            />
          </button>
          {newsOpen && (
            <div className="mt-3 pl-6 space-y-2.5">
              {person.news.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="flex items-start gap-2 w-full text-left bg-transparent border-none cursor-pointer p-0 group"
                >
                  <span className="text-muted-foreground text-xs mt-0.5 shrink-0">
                    •
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground leading-snug underline decoration-border underline-offset-2 group-hover:decoration-info-foreground group-hover:text-info-foreground transition-colors">
                      {item.headline}
                      <ArrowUpRight
                        size={12}
                        className="inline-block ml-1 -mt-0.5 text-muted-foreground group-hover:text-info-foreground transition-colors"
                      />
                    </p>
                    <p className="text-2xs text-muted-foreground mt-0.5">
                      {item.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom Tabs — Meetings / Emails */}
      <Tabs defaultValue="meetings" className="mb-8">
        <TabsList variant="line">
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="emails">Emails</TabsTrigger>
        </TabsList>

        <TabsContent value="meetings" className="mt-6">
          {person.meetings.map((group) => (
            <div key={group.week} className="mb-8">
              <p className="text-xs font-medium text-muted-foreground mb-4">
                {group.week}
              </p>
              <div className="space-y-0.5">
                {group.items.map((m) => (
                  <Link
                    key={m.id}
                    to="/meeting-detail"
                    className="no-underline text-inherit"
                  >
                    <MeetingRow
                      id={m.id}
                      title={m.title}
                      participants={m.participants}
                      time={m.time}
                      privacy={m.privacy}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="emails" className="mt-6">
          <div className="space-y-1">
            {person.emails.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">
                No email threads found
              </p>
            ) : (
              person.emails.map((email) => (
                <ConnectionEmailRow key={email.id} email={email} />
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
};

export default ConnectionDetailPage;
