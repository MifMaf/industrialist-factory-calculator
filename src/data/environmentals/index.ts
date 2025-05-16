import { DeepReadOnly } from "../types";
import { Environmental } from "./types";

export const environmentalRegistry = {
  power: { id: "power", name: "Power" },
  pollution: { id: "pollution", name: "Pollution" },
} as const satisfies DeepReadOnly<Record<string, Environmental>>;

export type EnvironmentalId = keyof typeof environmentalRegistry;
