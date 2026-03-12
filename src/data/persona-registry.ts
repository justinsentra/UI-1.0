export interface PersonaConfig {
  id: string;
  label: string;
  description: string;
  industry: string;
  featureHighlights: string[];
}

export const BUILTIN_PERSONAS: PersonaConfig[] = [
  {
    id: "engineering-manager",
    label: "Engineering Manager",
    description: "Product-focused: PRDs, sprint progress, engineering blockers",
    industry: "Technology",
    featureHighlights: [
      "Deep Research PRD generation",
      "Engineering blockers summary",
      "Sprint progress tracking",
    ],
  },
  {
    id: "jpm",
    label: "JPM",
    description: "Investment banking: financial models, deal flow, valuations",
    industry: "Financial Services",
    featureHighlights: [
      "3-Statement financial models",
      "Vendor evaluation matrices",
      "Weekly adoption reports",
      "Deal pipeline analysis",
    ],
  },
];

// Generated personas registered at runtime via registerPersonaConfig
const generatedPersonas: PersonaConfig[] = [];

export function registerPersonaConfig(config: PersonaConfig): void {
  const exists = generatedPersonas.some((p) => p.id === config.id);
  if (exists) return;
  generatedPersonas.push(config);
}

export function getAllPersonas(): PersonaConfig[] {
  return [...BUILTIN_PERSONAS, ...generatedPersonas];
}
