import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, MessageSquare } from "lucide-react";
import { cn, getInitials, getAvatarColor } from "@lib/utils";
import { formatInteractionDate } from "@/lib/date-utils";
import { sortByDate } from "@/lib/sort-utils";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { ConnectionsChatSidebar } from "@/components/connections/connections-chat-sidebar";
import { people, companies } from "@/data/mock-connections";

const tabs = ["People", "Companies"] as const;
type Tab = (typeof tabs)[number];
type SortDirection = "desc" | "asc";

const ConnectionsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("People");
  const [search, setSearch] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [peopleSortDir, setPeopleSortDir] = useState<SortDirection>("desc");
  const [companiesSortDir, setCompaniesSortDir] =
    useState<SortDirection>("desc");

  const filteredPeople = useMemo(() => {
    const filtered = people.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase()),
    );
    return sortByDate(filtered, peopleSortDir);
  }, [search, peopleSortDir]);

  const filteredCompanies = useMemo(() => {
    const filtered = companies.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );
    return sortByDate(filtered, companiesSortDir);
  }, [search, companiesSortDir]);

  return (
    <div className="max-w-[740px] mx-auto pt-[56px] px-8">
      {/* Fixed top-right controls — segmented tabs + chat icon */}
      <div
        className="fixed top-[12px] z-30 flex items-center gap-1 transition-[right] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{ right: chatOpen ? 396 : 20 }}
      >
        <div className="rounded-[8px] p-[2px]">
          <AnimatedBackground
            defaultValue={activeTab}
            onValueChange={(id) => {
              if (id) setActiveTab(id as Tab);
            }}
            className="rounded-md bg-[var(--bg-selected)]"
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                data-id={tab}
                type="button"
                className="inline-flex items-center justify-center px-3 py-1 text-2xs font-medium text-[var(--fg-muted)] transition-transform active:scale-[0.98] border-none cursor-pointer bg-transparent data-[checked=true]:text-[var(--fg-base)]"
              >
                {tab}
              </button>
            ))}
          </AnimatedBackground>
        </div>
        <button
          type="button"
          onClick={() => setChatOpen((prev) => !prev)}
          className={cn(
            "h-7 w-7 flex items-center justify-center rounded-md transition-colors duration-150 ease-out cursor-pointer border-none",
            chatOpen
              ? "bg-[var(--bg-selected)] text-[var(--fg-muted)]"
              : "bg-transparent text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)]",
          )}
          title="Deep Research"
        >
          <MessageSquare size={15} />
        </button>
      </div>

      <div className="mb-5">
        <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight">
          Connections
        </h1>
      </div>

      {/* Search bar */}
      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
        />
        <input
          type="text"
          placeholder="Search connections"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 pl-9 pr-4 w-full rounded-lg border border-[var(--border-base)] bg-background text-sm placeholder:text-[var(--fg-disabled)]"
        />
      </div>

      {activeTab === "People" && (
        <div>
          <div className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-2 text-xs text-[var(--fg-muted)] font-medium">
            <span>Person</span>
            <button
              type="button"
              onClick={() =>
                setPeopleSortDir((d) => (d === "desc" ? "asc" : "desc"))
              }
              className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-xs text-[var(--fg-muted)] font-medium p-0 hover:text-[var(--fg-base)] transition-colors"
            >
              Last interaction
              <ChevronDown
                size={12}
                className={cn(
                  "transition-transform duration-200",
                  peopleSortDir === "asc" && "rotate-180",
                )}
              />
            </button>
            <span className="text-right">Interactions</span>
          </div>
          <div className="divide-y divide-[var(--border-base)]">
            {filteredPeople.map((p) => (
              <Link
                key={p.id}
                to={`/connection-detail?id=${p.id}`}
                className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-[var(--bg-component-hover)] rounded-lg transition-colors no-underline"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-2xs font-medium shrink-0"
                    style={{ backgroundColor: getAvatarColor(p.name) }}
                  >
                    {getInitials(p.name)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-[var(--fg-base)]">
                      {p.name}
                    </span>
                    <span className="text-xs text-[var(--fg-disabled)]">
                      {p.email}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-[var(--fg-muted)]">
                  {formatInteractionDate(p.lastInteraction)}
                </span>
                <span className="text-sm text-[var(--fg-base)] text-right">
                  {p.interactions}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Companies" && (
        <div>
          <div className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-2 text-xs text-[var(--fg-muted)] font-medium">
            <span>Company</span>
            <button
              type="button"
              onClick={() =>
                setCompaniesSortDir((d) => (d === "desc" ? "asc" : "desc"))
              }
              className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-xs text-[var(--fg-muted)] font-medium p-0 hover:text-[var(--fg-base)] transition-colors"
            >
              Last interaction
              <ChevronDown
                size={12}
                className={cn(
                  "transition-transform duration-200",
                  companiesSortDir === "asc" && "rotate-180",
                )}
              />
            </button>
            <span className="text-right">Contacts</span>
          </div>
          <div className="divide-y divide-[var(--border-base)]">
            {filteredCompanies.map((c) => (
              <div
                key={c.id}
                className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-[var(--bg-component-hover)] rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=32`}
                    alt=""
                    className="w-8 h-8 rounded-full shrink-0 bg-[var(--bg-subtle)]"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm text-[var(--fg-base)]">
                      {c.name}
                    </span>
                    <a
                      href={`https://${c.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--fg-disabled)] hover:underline hover:text-[var(--fg-muted)] transition-colors no-underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {c.domain}
                    </a>
                  </div>
                </div>
                <span className="text-sm text-[var(--fg-muted)]">
                  {formatInteractionDate(c.lastInteraction)}
                </span>
                <span className="text-sm text-[var(--fg-base)] text-right">
                  {c.contacts}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      <ConnectionsChatSidebar
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </div>
  );
};

export default ConnectionsPage;
