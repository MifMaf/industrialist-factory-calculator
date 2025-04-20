import { Machine } from "./types";

export const machineRegistry = {
  "oil-rig": { id: "oil-rig", name: "Oil Rig", bgColor: "darkgrey" },
  "water-pump2": { id: "water-pump2", name: "Water Pump2", bgColor: "aqua" },
  "steam-cracking-plant": {
    id: "steam-cracking-plant",
    name: "Steam Cracking Plant",
    bgColor: "white",
  },
} as const satisfies Record<string, Machine>;

export type MachineId = keyof typeof machineRegistry;
