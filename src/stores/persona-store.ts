import { create } from "zustand";
import { getAllPersonas, type PersonaConfig } from "@/data/persona-registry";

export type { PersonaConfig };

export { getAllPersonas };

interface PersonaStore {
  persona: string;
  setPersona: (persona: string) => void;
}

export const usePersonaStore = create<PersonaStore>((set) => ({
  persona: "mcgi",
  setPersona: (persona) => set({ persona }),
}));
