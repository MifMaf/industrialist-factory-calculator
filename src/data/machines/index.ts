import { Machine } from "./types";

export const machineRegistry: Record<string, Machine> = {
  "oil-rig": { id: "oil-rig", name: "Oil Rig" },
  "water-pump2": { id: "water-pump2", name: "Water Pump2" },
} as const;

export type MachineId = keyof typeof machineRegistry;
