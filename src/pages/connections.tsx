import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { cn, getInitials, getAvatarColor } from "@lib/utils";
import { formatInteractionDate } from "@/lib/date-utils";
import { sortByDate } from "@/lib/sort-utils";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaConnections } from "@/data/content-resolver";
import PageShell from "@/components/ui/page-shell";

const tabs = ["People", "Companies"] as const;
type Tab = (typeof tabs)[number];
type SortDirection = "desc" | "asc";

const ConnectionsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("People");
  const [search, setSearch] = useState("");
  const [peopleSortDir, setPeopleSortDir] = useState<SortDirection>("desc");
  const [companiesSortDir, setCompaniesSortDir] =
    useState<SortDirection>("desc");
  const persona = usePersonaStore((s) => s.persona);
  const { people, companies } = useMemo(
    () => getPersonaConnections(persona),
    [persona],
  );

  const filteredPeople = useMemo(() => {
    const filtered = people.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase()),
    );
    return sortByDate(filtered, peopleSortDir);
  }, [search, peopleSortDir, people]);

  const filteredCompanies = useMemo(() => {
    const filtered = companies.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );
    return sortByDate(filtered, companiesSortDir);
  }, [search, companiesSortDir, companies]);

  return (
    <PageShell>
      {/* Fixed top-right controls — segmented tabs */}
      <div className="fixed top-[12px] right-[20px] z-30 flex items-center gap-1">
        <div className="rounded-[8px] p-[2px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "inline-flex items-center justify-center px-3 py-1 text-2xs font-medium border-none cursor-pointer rounded-md",
                activeTab === tab
                  ? "bg-[var(--bg-selected)] text-[var(--fg-base)]"
                  : "bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
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
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-transparent focus:border-[var(--border-base)] bg-[var(--bg-component-hover)] text-sm placeholder:text-[var(--fg-disabled)] text-[var(--fg-base)] outline-none transition-colors"
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
                className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-[var(--bg-component-hover)] transition-colors no-underline"
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
                className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-[var(--bg-component-hover)] transition-colors"
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
    </PageShell>
  );
};

export default ConnectionsPage;
