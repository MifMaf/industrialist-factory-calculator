import { Environmental } from "./types";

export const environmentalRegistry = {
  power: { id: "power", name: "Power" },
  pollution: { id: "pollution", name: "Pollution" },
} as const satisfies Record<string, Environmental>;

export type EnvironmentalId = keyof typeof environmentalRegistry;
