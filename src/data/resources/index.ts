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
  soil: { id: "soil", name: "Soil", category: "item" },
  "rich-soil": { id: "rich-soil", name: "Rich Soil", category: "item" },
  sand: { id: "sand", name: "Sand", category: "item" },
  gravel: { id: "gravel", name: "Gravel", category: "item" },
  rock: { id: "rock", name: "Rock", category: "item" },
  coal: { id: "coal", name: "Coal", category: "item" },
  "raw-copper": { id: "raw-copper", name: "Raw Copper", category: "item" },
  "raw-iron": { id: "raw-iron", name: "Raw Iron", category: "item" },
  "raw-lead": { id: "raw-lead", name: "Raw Lead", category: "item" },
  "raw-zinc": { id: "raw-zinc", name: "Raw Zinc", category: "item" },
  "bauxite-residue": {
    id: "bauxite-residue",
    name: "Bauxite Residue",
    category: "item",
  },
  "table-salt": { id: "table-salt", name: "Table Salt", category: "item" },
  "shallow-earth-fragment": {
    id: "shallow-earth-fragment",
    name: "Shallow Earth Fragment",
    category: "item",
  },
  "medium-earth-fragment": {
    id: "medium-earth-fragment",
    name: "Medium Earth Fragment",
    category: "item",
  },
  "deep-earth-fragment": {
    id: "deep-earth-fragment",
    name: "Deep Earth Fragment",
    category: "item",
  },
  "copper-drill-head": {
    id: "copper-drill-head",
    name: "Copper Drill Head",
    category: "item",
  },
  "iron-drill-head": {
    id: "iron-drill-head",
    name: "Iron Drill Head",
    category: "item",
  },
  "steel-drill-head": {
    id: "steel-drill-head",
    name: "Steel Drill Head",
    category: "item",
  },
  "tungsten-carbide-drill-head": {
    id: "tungsten-carbide-drill-head",
    name: "Tungsten Carbide Drill Head",
    category: "item",
  },
  "acetic-acid": { id: "acetic-acid", name: "Acetic Acid", category: "fluid" },
  "hydrochloric-acid": {
    id: "hydrochloric-acid",
    name: "Hydrochloric Acid",
    category: "fluid",
  },
  "sulfuric-acid": {
    id: "sulfuric-acid",
    name: "Sulfuric Acid",
    category: "fluid",
  },
  "machine-oil": { id: "machine-oil", name: "Machine Oil", category: "fluid" },
} as const satisfies Record<string, Resource>;

export type ResourceId = keyof typeof resourceRegistry;
