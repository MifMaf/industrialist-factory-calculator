import { Resource } from "./types";

export const resourceRegistry = {
  "crude-oil": {
    id: "crude-oil",
    name: "Crude Oil",
    category: "fluid",
  },
  water: {
    id: "water",
    name: "Water",
    category: "fluid",
  },
  pta: {
    id: "pta",
    name: "PTA",
    category: "fluid",
  },
  meg: {
    id: "meg",
    name: "MEG",
    category: "item",
  },
  ethylene: {
    id: "ethylene",
    name: "Ethylene",
    category: "fluid",
  },
  residue: {
    id: "residue",
    name: "Residue",
    category: "fluid",
  },
  "plastic-pellets": {
    id: "plastic-pellets",
    name: "Plastic Pellets",
    category: "item",
  },
  steam: {
    id: "steam",
    name: "Steam",
    category: "fluid",
  },
  paraxylene: { id: "paraxylene", name: "Paraxylene", category: "fluid" },
} as const satisfies Record<string, Resource>;

export type ResourceId = keyof typeof resourceRegistry;
