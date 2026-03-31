import { useState } from "react";
import type { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { MOCK_ACTIONS } from "@/data/mock-actions";
import type { Action } from "@/data/mock-actions";

import outlookLogo from "@/assets/logos/outlook.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import excelLogo from "@/assets/logos/excel.png";
import sharePointLogo from "@/assets/logos/sharepoint.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import serviceNowLogo from "@/assets/logos/service-now.png";
import mondayComLogo from "@/assets/logos/monday-com.webp";
import powerpointLogo from "@/assets/logos/powerpoint.png";
import wordLogo from "@/assets/logos/word.png";
import { ZoomIcon } from "@/icons/source-icons";

interface ActionIntegrationVisual {
  logo?: string;
  LogoIcon?: ComponentType<{ size?: number; className?: string }>;
}

const integrationVisualMap: Record<string, ActionIntegrationVisual> = {
  outlook: { logo: outlookLogo },
  teams: { logo: teamsLogo },
  zoom: { LogoIcon: ZoomIcon },
  excel: { logo: excelLogo },
  sharepoint: { logo: sharePointLogo },
  salesforce: { logo: salesforceLogo },
  servicenow: { logo: serviceNowLogo },
  "monday-com": { logo: mondayComLogo },
  powerpoint: { logo: powerpointLogo },
  word: { logo: wordLogo },
};

const ActionCard = ({
  action,
  onClick,
}: {
  action: Action;
  onClick: () => void;
}) => (
  <Card
    className="cursor-pointer transition-colors duration-150 ease-out hover:bg-accent/50 rounded-xl p-6 gap-0"
    onClick={onClick}
  >
    <div className="flex flex-wrap items-center gap-2">
      {action.integrations.map((integrationId) => {
        const integrationVisual = integrationVisualMap[integrationId];
        const IntegrationLogoIcon = integrationVisual?.LogoIcon;

        if (!integrationVisual) {
          return null;
        }

        return (
          <div
            key={integrationId}
            className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-white"
          >
            {integrationVisual.logo ? (
              <img
                src={integrationVisual.logo}
                alt={integrationId}
                className="size-4 object-contain"
              />
            ) : IntegrationLogoIcon ? (
              <IntegrationLogoIcon size={16} />
            ) : null}
          </div>
        );
      })}
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
      <div className="mx-auto max-w-400">
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
              className="rounded-lg"
            >
              <Plus size={16} />
              Create Action
            </Button>{" "}
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
