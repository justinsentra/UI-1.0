import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Plus, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MOCK_SWIMLANES, STATUS_CONFIG } from "@/data/mock-swimlanes";
import type { Swimlane } from "@/data/mock-swimlanes";

function StatusBadge({ status }: { status: Swimlane["status"] }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.625rem] font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function SwimlaneRow({
  swimlane,
  onClick,
}: {
  swimlane: Swimlane;
  onClick: () => void;
}) {
  const weekCount = swimlane.weeks.length;
  const eventCount = swimlane.weeks.reduce(
    (sum, w) => sum + w.events.length,
    0,
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-4 w-full py-4 px-4 rounded-xl hover:bg-accent transition-colors text-left cursor-pointer bg-transparent border-none"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5">
          <p className="text-sm font-medium text-foreground truncate">
            {swimlane.title}
          </p>
          <StatusBadge status={swimlane.status} />
        </div>
        <p className="text-xs text-muted-foreground/60 mt-1 line-clamp-1">
          {swimlane.currentStateSummary}
        </p>
      </div>

      <div className="hidden sm:flex items-center gap-4 shrink-0">
        <span className="text-xs text-muted-foreground/50 tabular-nums">
          {weekCount}w · {eventCount} events
        </span>
        <span className="text-2xs text-muted-foreground/40">
          {swimlane.owner}
        </span>
      </div>

      <ChevronRight size={14} className="text-muted-foreground/40 shrink-0" />
    </button>
  );
}

function NewSwimlaneDialog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreate = () => {
    setTitle("");
    setDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" size="sm" className="gap-1.5 rounded-lg" />
        }
      >
        <Plus size={14} />
        New Swimlane
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Swimlane</DialogTitle>
          <DialogDescription>
            Define an initiative, project, or objective to track. Sentra will
            automatically surface relevant events and interactions.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="swimlane-title"
              className="text-xs font-medium text-foreground"
            >
              Title
            </label>
            <Input
              id="swimlane-title"
              placeholder="e.g. Oracle Database Migration"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="lg"
              rounded="full"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="swimlane-desc"
              className="text-xs font-medium text-foreground"
            >
              Description
            </label>
            <Input
              id="swimlane-desc"
              placeholder="What should Sentra track for this initiative?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="lg"
              rounded="full"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" size="sm" />}>
            Cancel
          </DialogClose>
          <Button
            size="sm"
            onClick={handleCreate}
            disabled={!title.trim()}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const SwimlanesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full overflow-x-hidden overflow-y-auto">
      <div className="relative min-h-full px-4 py-6 pt-14 sm:p-12 sm:pt-24 md:pt-24">
        <div className="max-w-screen-4xl mx-auto w-full">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-center font-medium text-[40px] leading-[48px] text-foreground tracking-tight">
              Swimlanes
            </h1>
            <p className="mt-2 text-base text-muted-foreground/60">
              Track initiatives, projects, and objectives across your
              organization.
            </p>
          </div>

          <div className="mx-auto mt-12 w-full max-w-3xl">
            <div className="flex items-center justify-end mb-4">
              <NewSwimlaneDialog />
            </div>

            {MOCK_SWIMLANES.length > 0 ? (
              <div className="divide-y divide-border">
                {MOCK_SWIMLANES.map((swimlane) => (
                  <SwimlaneRow
                    key={swimlane.id}
                    swimlane={swimlane}
                    onClick={() => navigate(`/swimlanes/${swimlane.id}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-border px-8 py-24 text-center">
                <Waves
                  className="size-10 text-muted-foreground/60"
                  strokeWidth={1}
                />
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  No swimlanes yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimlanesPage;
