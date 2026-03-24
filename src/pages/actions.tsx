import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MOCK_ACTIONS } from "@/data/mock-actions";
import type { Action } from "@/data/mock-actions";

import gmailLogo from "@/assets/logos/gmail.svg";
import calendarLogo from "@/assets/logos/calendar.svg";
import githubLogo from "@/assets/logos/github.svg";
import slackLogo from "@/assets/logos/slack.svg";
import linearLogo from "@/assets/logos/linear.svg";
import notionLogo from "@/assets/logos/notion.svg";
import googleDriveLogo from "@/assets/logos/google-drive.svg";

const logoMap: Record<string, string> = {
  gmail: gmailLogo,
  calendar: calendarLogo,
  github: githubLogo,
  slack: slackLogo,
  linear: linearLogo,
  notion: notionLogo,
  "google-drive": googleDriveLogo,
};

const ActionCard = ({
  action,
  onClick,
}: {
  action: Action;
  onClick: () => void;
}) => (
  <Card
    className="cursor-pointer transition-colors duration-200 hover:bg-gradient-to-br hover:from-card hover:to-muted/60 rounded-3xl p-6 gap-0"
    onClick={onClick}
  >
    <div className="flex flex-wrap items-center gap-2">
      {action.integrations.map((id) =>
        logoMap[id] ? (
          <div
            key={id}
            className="size-7 shrink-0 rounded-lg border border-border bg-white flex items-center justify-center"
          >
            <img
              src={logoMap[id]}
              alt={id}
              className="size-4 object-contain"
            />
          </div>
        ) : null,
      )}
    </div>

    <CardTitle className="mt-4 line-clamp-2">{action.name}</CardTitle>

    <CardDescription className="mt-1 line-clamp-3 mb-4">
      {action.description}
    </CardDescription>

    <div className="mt-auto flex items-start gap-1.5 text-muted-foreground">
      {action.triggerType === "scheduled" ? (
        <Clock size={14} className="shrink-0 mt-px" />
      ) : (
        <Zap size={14} className="shrink-0 mt-px" />
      )}
      <CardDescription>{action.schedule}</CardDescription>
    </div>
  </Card>
);

const ActionsPage = () => {
  const navigate = useNavigate();
  const [actions] = useState(MOCK_ACTIONS);

  return (
    <div className="px-8 pt-14 pb-16 min-h-screen @container/main">
      <div className="mx-auto max-w-[100rem]">
        <div className="max-w-xl">
          <div className="text-3xl font-medium tracking-tight text-foreground">
            Actions
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Create scheduled or trigger-based automations.
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-end gap-4">
            <Button
              onClick={() => navigate("/actions/new")}
              className="rounded-full"
            >
              <Plus size={16} />
              Create Action
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {actions.map((action) => (
              <ActionCard
                key={action.id}
                action={action}
                onClick={() => navigate(`/actions/${action.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsPage;
