import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_INTEGRATIONS } from "./integrations";

const IntegrationDetailPage = () => {
  const { integrationId } = useParams<{ integrationId: string }>();
  const source = ALL_INTEGRATIONS.find((i) => i.id === integrationId);
  const [connected, setConnected] = useState(source?.connected ?? false);

  if (!source) {
    return (
      <div className="mx-auto max-w-3xl px-8 pt-14">
        <Link
          to="/integrations"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-muted-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          All integrations
        </Link>
        <p className="mt-8 text-sm text-muted-foreground">
          Integration not found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-8 pt-14 pb-16">
      {/* Back link */}
      <Link
        to="/integrations"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-muted-foreground transition-colors"
      >
        <ArrowLeft size={14} />
        All integrations
      </Link>

      {/* Header */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-10 shrink-0 rounded-xl border border-border bg-card flex items-center justify-center overflow-hidden">
            {source.logo ? (
              <img
                src={source.logo}
                alt={`${source.name} logo`}
                className="size-6 object-contain"
              />
            ) : source.LogoIcon ? (
              <source.LogoIcon size={22} />
            ) : null}
          </div>
          <div className="min-w-0">
            <p className="text-base font-medium text-foreground truncate">
              {source.name}
            </p>
            <p className="text-sm text-muted-foreground truncate">
              {source.description}
            </p>
          </div>
        </div>

        <Button
          variant={connected ? "outline" : "default"}
          size="lg"
          className="shrink-0 rounded-full"
          onClick={() => setConnected((v) => !v)}
        >
          {connected ? "Disconnect" : "Connect"}
        </Button>
      </div>

      {/* Overview */}
      <section className="mt-8">
        <p className="text-base font-medium text-foreground">Overview</p>
        <div className="mt-3 text-sm text-muted-foreground leading-relaxed space-y-4">
          {source.overview.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("####")) {
              return (
                <h4
                  key={i}
                  className="text-sm font-medium text-foreground mt-6"
                >
                  {paragraph.replace("#### ", "")}
                </h4>
              );
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </section>
    </div>
  );
};

export default IntegrationDetailPage;
