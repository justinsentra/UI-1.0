import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, X } from "lucide-react";
import { cn } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { formatInteractionDate } from "@/lib/date-utils";
import { sortByDate } from "@/lib/sort-utils";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaConnections } from "@/data/content-resolver";
import PageShell from "@/components/ui/page-shell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const TAG_FILTERS = [
  "Internal",
  "External",
  "Client",
  "Vendor",
  "Engineering",
  "Leadership",
  "Active Deal",
] as const;

type SortDirection = "desc" | "asc";

const ConnectionsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [peopleSortDir, setPeopleSortDir] = useState<SortDirection>("desc");
  const [companiesSortDir, setCompaniesSortDir] =
    useState<SortDirection>("desc");
  const persona = usePersonaStore((s) => s.persona);
  const { people, companies } = useMemo(
    () => getPersonaConnections(persona),
    [persona],
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((previous) => {
      const next = new Set(previous);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filteredPeople = useMemo(() => {
    const filtered = people.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.email.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        selectedTags.size === 0 ||
        [...selectedTags].every((tag) => person.tags?.includes(tag));
      return matchesSearch && matchesTags;
    });
    return sortByDate(filtered, peopleSortDir);
  }, [search, selectedTags, peopleSortDir, people]);

  const filteredCompanies = useMemo(() => {
    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(search.toLowerCase()),
    );
    return sortByDate(filtered, companiesSortDir);
  }, [search, companiesSortDir, companies]);

  return (
    <PageShell>
      <Tabs defaultValue="people">
        {/* Fixed top-right controls */}
        <div className="absolute top-3 right-5 z-10 flex items-center gap-1">
          <TabsList>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
          </TabsList>
        </div>

        <div className="mb-5">
          <h1 className="text-3xl font-normal text-foreground tracking-tight">
            Connections
          </h1>
        </div>

        {/* Search bar */}
        <div className="relative mb-5">
          <InputGroup className="h-9 rounded-lg bg-accent border-transparent focus-within:border-border">
            <InputGroupAddon align="inline-start">
              <Search size={16} />
            </InputGroupAddon>
            <InputGroupInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search connections"
            />
          </InputGroup>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          {TAG_FILTERS.map((tag) => {
            const isActive = selectedTags.has(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium border transition-colors cursor-pointer",
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/50",
                )}
              >
                {tag}
                {isActive && <X size={10} />}
              </button>
            );
          })}
          {selectedTags.size > 0 && (
            <button
              type="button"
              onClick={() => setSelectedTags(new Set())}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              Clear all
            </button>
          )}
        </div>

        <TabsContent value="people">
          <div>
            <div className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-2 text-xs text-muted-foreground font-medium">
              <span>Person</span>
              <button
                type="button"
                onClick={() =>
                  setPeopleSortDir((d) => (d === "desc" ? "asc" : "desc"))
                }
                className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-xs text-muted-foreground font-medium p-0 hover:text-foreground transition-colors"
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
            <div className="divide-y divide-border">
              {filteredPeople.map((person) => (
                <Link
                  key={person.id}
                  to={`/connection-detail?id=${person.id}`}
                  className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-accent transition-colors no-underline"
                >
                  <div className="flex items-center gap-3">
                    <UserAvatar name={person.name} />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-foreground">
                        {person.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {person.email}
                      </span>
                      {person.tags && person.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {person.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-2xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {formatInteractionDate(person.lastInteraction)}
                  </span>
                  <span className="text-sm text-foreground text-right">
                    {person.interactions}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="companies">
          <div>
            <div className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-2 text-xs text-muted-foreground font-medium">
              <span>Company</span>
              <button
                type="button"
                onClick={() =>
                  setCompaniesSortDir((d) => (d === "desc" ? "asc" : "desc"))
                }
                className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-xs text-muted-foreground font-medium p-0 hover:text-foreground transition-colors"
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
            <div className="divide-y divide-border">
              {filteredCompanies.map((c) => (
                <div
                  key={c.id}
                  className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=32`}
                      alt=""
                      className="w-8 h-8 rounded-full shrink-0 bg-muted"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground">
                        {c.name}
                      </span>
                      <a
                        href={`https://${c.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:underline transition-colors no-underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {c.domain}
                      </a>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {formatInteractionDate(c.lastInteraction)}
                  </span>
                  <span className="text-sm text-foreground text-right">
                    {c.contacts}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
};

export default ConnectionsPage;
