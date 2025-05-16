import { DeepReadOnly } from "../types";
import { Machine } from "./types";

export const machineRegistry = {
  "oil-rig": { id: "oil-rig", name: "Oil Rig", bgColor: "darkgrey" },
  "water-pump2": { id: "water-pump2", name: "Water Pump2", bgColor: "aqua" },
  "steam-cracking-plant": {
    id: "steam-cracking-plant",
    name: "Steam Cracking Plant",
    bgColor: "white",
  },
  "mineshaft-drill": {
    id: "mineshaft-drill",
    name: "Mineshaft Drill",
    bgColor: "gray",
  },
} as const satisfies DeepReadOnly<Record<string, Machine>>;

export type MachineId = keyof typeof machineRegistry;
