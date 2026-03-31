import { registerPersonaData, type PersonaData } from "@/data/personas";
import { registerPersonaConfig } from "@/data/persona-registry";
import { homeData } from "./home";
import { meetings } from "./meetings";
import { connections } from "./connections";
import { reportsData } from "./reports";
import { reportDetails } from "./report-details";
import { deepResearchData } from "./deep-research";
import { commitments } from "./commitments";

const data: PersonaData = {
  home: homeData,
  meetings,
  connections,
  reports: reportsData,
  reportDetails,
  deepResearch: deepResearchData,
  commitments,
};

registerPersonaData("mcgi", data);

registerPersonaConfig({
  id: "mcgi",
  label: "AG Global Innovation",
  description:
    "Corporate venture capital: startup scouting, deal flow, portfolio management",
  industry: "Corporate Venture Capital",
  featureHighlights: [
    "Investment memo generation",
    "Market landscape analysis",
    "Deal flow pipeline tracking",
    "Portfolio company monitoring",
  ],
});
