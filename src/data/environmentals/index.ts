import { Environmental } from "./types";

export const environmentalRegistry: Record<string, Environmental> = {
  power: { id: "power", name: "Power" },
  pollution: { id: "pollution", name: "Pollution" },
} as const;

export type EnvironmentalId = keyof typeof environmentalRegistry;
