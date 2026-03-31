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

registerPersonaData("pn-crm", data);

registerPersonaConfig({
  id: "pn-crm",
  label: "Circle CRM",
  description:
    "Student entrepreneur: relationship intelligence, fundraising, venture capital, community building",
  industry: "Personal CRM / Relationship Intelligence",
  featureHighlights: [
    "Pre-seed pitch deck generation",
    "Investor pipeline tracking",
    "Competitive landscape analysis",
    "User growth & retention reporting",
  ],
});
