import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { formatInteractionDate } from "@/lib/date-utils";
import { sortByDate } from "@/lib/sort-utils";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaConnections } from "@/data/content-resolver";
import PageShell from "@/components/ui/page-shell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

type SortDirection = "desc" | "asc";

const ConnectionsPage = () => {
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
      <Tabs defaultValue="people">
        {/* Fixed top-right controls */}
        <div className="fixed top-[12px] right-[20px] z-30 flex items-center gap-1">
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
              {filteredPeople.map((p) => (
                <Link
                  key={p.id}
                  to={`/connection-detail?id=${p.id}`}
                  className="grid grid-cols-[1fr_120px_80px] gap-x-6 px-4 py-3.5 items-center hover:bg-accent transition-colors no-underline"
                >
                  <div className="flex items-center gap-3">
                    <UserAvatar name={p.name} />
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground">
                        {p.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {p.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {formatInteractionDate(p.lastInteraction)}
                  </span>
                  <span className="text-sm text-foreground text-right">
                    {p.interactions}
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
