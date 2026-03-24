import { useState } from "react";
import {
  Info,
  Calendar,
  RefreshCw,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Funnel,
  Users,
  MessageSquare,
  SquareCheckBig,
  Moon,
} from "lucide-react";

interface UsageRow {
  id: string;
  date: string;
  category: string;
  mode: string;
  credits: number;
}

const mockUsage: UsageRow[] = [
  { id: "1", date: "Mar 23, 7:00 PM", category: "Evening Briefing", mode: "Default", credits: 959 },
  { id: "2", date: "Mar 23, 6:37 PM", category: "Action Items", mode: "Default", credits: 243 },
  { id: "3", date: "Mar 23, 6:36 PM", category: "Meeting Prep", mode: "Default", credits: 480 },
  { id: "4", date: "Mar 23, 4:10 PM", category: "Meeting Prep", mode: "Default", credits: 3328 },
  { id: "5", date: "Mar 23, 4:10 PM", category: "Meeting Prep", mode: "Default", credits: 2450 },
  { id: "6", date: "Mar 23, 4:08 PM", category: "Action Items", mode: "Default", credits: 587 },
  { id: "7", date: "Mar 23, 4:08 PM", category: "Meeting Prep", mode: "Default", credits: 418 },
  { id: "8", date: "Mar 23, 4:06 PM", category: "Action Items", mode: "Default", credits: 250 },
  { id: "9", date: "Mar 23, 4:05 PM", category: "Meeting Prep", mode: "Default", credits: 550 },
  { id: "10", date: "Mar 22, 9:00 PM", category: "Evening Briefing", mode: "Default", credits: 1020 },
  { id: "11", date: "Mar 22, 3:15 PM", category: "Meeting Prep", mode: "Default", credits: 1850 },
  { id: "12", date: "Mar 22, 3:14 PM", category: "Action Items", mode: "Default", credits: 312 },
  { id: "13", date: "Mar 21, 7:00 PM", category: "Evening Briefing", mode: "Default", credits: 945 },
  { id: "14", date: "Mar 21, 2:30 PM", category: "Meeting Prep", mode: "Default", credits: 2100 },
  { id: "15", date: "Mar 20, 7:00 PM", category: "Evening Briefing", mode: "Default", credits: 890 },
];

const categoryBreakdown = [
  { label: "Meeting Prep", credits: 15200, runs: 3, icon: Users },
  { label: "Chat Sessions", credits: 8903, runs: 1, icon: MessageSquare },
  { label: "Action Items", credits: 1892, runs: 5, icon: SquareCheckBig },
  { label: "Evening Briefing", credits: 959, runs: 1, icon: Moon },
];

const TOTAL_CREDITS = 100000;
const USED_CREDITS = 26954;
const AVAILABLE_CREDITS = TOTAL_CREDITS - USED_CREDITS;
const ROWS_PER_PAGE = 10;

export function BillingTab() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(mockUsage.length / ROWS_PER_PAGE);
  const paginatedRows = mockUsage.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);
  const startRow = page * ROWS_PER_PAGE + 1;
  const endRow = Math.min((page + 1) * ROWS_PER_PAGE, mockUsage.length);
  const percentage = Math.round((AVAILABLE_CREDITS / TOTAL_CREDITS) * 100);

  return (
    <div>
      {/* Plan + Credits Card */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] rounded-2xl border border-border overflow-hidden">
        {/* Left: Plan Info */}
        <div className="flex flex-col justify-between gap-8 p-6 bg-card">
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold text-foreground">Free Plan</p>
            <p className="text-sm text-muted-foreground">
              100,000 one-time credits, access to only Dimension agent
            </p>
          </div>
        </div>

        {/* Right: Credits Info */}
        <div className="flex flex-col justify-between p-6 border-t lg:border-t-0 lg:border-l border-border bg-background">
          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-row justify-between gap-2">
              <p className="text-sm text-foreground flex items-center gap-1">
                Available Credits
                <Info size={14} className="text-muted-foreground cursor-pointer" />
              </p>
              <p className="text-sm flex items-center gap-1 font-mono text-muted-foreground">
                {AVAILABLE_CREDITS.toLocaleString()} / {TOTAL_CREDITS.toLocaleString()}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full overflow-hidden rounded-full h-1.5 bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${percentage}%`,
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 82.71%, rgba(255,255,255,0.7) 100%), linear-gradient(90deg, rgb(107,98,242) 0%, rgb(146,140,255) 100%)",
                }}
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Upgrade your plan to get more credits.
            </p>
          </div>

          <div className="mt-10 flex flex-row justify-between gap-4">
            <button
              type="button"
              className="h-9 px-4 rounded-full border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
            >
              Adjust Plan
            </button>
            <button
              type="button"
              className="size-7 shrink-0 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent transition-colors cursor-pointer"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm flex items-center gap-2 text-foreground">
            <Calendar size={14} />
            Usage
          </p>
          <button
            type="button"
            className="h-8 px-3 rounded-full border border-border text-xs text-foreground hover:bg-accent transition-colors cursor-pointer flex items-center gap-2"
          >
            Mar 1, 2026 - Mar 23, 2026
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">Credits Left</p>
            <p className="text-xl mt-1 font-mono text-foreground">
              {AVAILABLE_CREDITS.toLocaleString()}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">Credits Used</p>
            <p className="text-xl mt-1 font-mono text-foreground">
              {USED_CREDITS.toLocaleString()}
            </p>
            <p className="text-xs mt-0.5 text-muted-foreground/60">this period</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">Est. Days Left</p>
            <p className="text-xl mt-1 font-mono text-foreground">~63</p>
            <p className="text-xs mt-0.5 text-muted-foreground/60">at current rate</p>
          </div>
        </div>

        {/* Activity Table */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-xs text-muted-foreground">Activity</p>
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Funnel size={13} />
              Filters
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground/60">
                  <th className="px-4 py-2.5 font-normal">Date & Time</th>
                  <th className="px-4 py-2.5 font-normal">Category</th>
                  <th className="px-4 py-2.5 font-normal">Mode</th>
                  <th className="px-4 py-2.5 text-right font-normal">Credits</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-border last:border-b-0 transition-colors hover:bg-accent"
                  >
                    <td className="whitespace-nowrap px-4 py-2.5 text-muted-foreground">
                      {row.date}
                    </td>
                    <td className="px-4 py-2.5 text-foreground">{row.category}</td>
                    <td className="px-4 py-2.5 text-foreground">{row.mode}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-foreground">
                      {row.credits.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground">Rows per page</p>
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-foreground"
              >
                10
                <ChevronDown size={12} className="opacity-50" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xs text-muted-foreground">
                {startRow}-{endRow} of {mockUsage.length}
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={page === 0}
                  onClick={() => setPage((p) => p - 1)}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages - 1}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categoryBreakdown.map((cat) => (
            <button
              key={cat.label}
              type="button"
              className="rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-accent cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <cat.icon size={14} className="shrink-0 text-muted-foreground" />
                <p className="text-xs text-foreground">{cat.label}</p>
              </div>
              <p className="text-base mt-2 font-mono text-foreground">
                {cat.credits.toLocaleString()} credits
              </p>
              <p className="text-xs mt-1 text-muted-foreground">
                {cat.runs} runs · {Math.round(cat.credits / cat.runs).toLocaleString()} avg/run
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
