import { ResourceId } from "../resources";
import { DynamicRecipe, ResourceAmount } from "./types";
import {
  checkBoxOption,
  createRecipeRegistry,
  defineDynamicRecipe,
  defineStaticRecipe,
  rangeOption,
  selectOption,
} from "./utils";

export const recipeRegistry = createRecipeRegistry({
  "water-pump2": defineStaticRecipe({
    id: "water-pump2",
    machineId: "water-pump2",
    resolvedRecipe: {
      inputs: [],
      outputs: [{ resourceId: "water", amount: 36 }],
      time: 6,
      environmentals: { power: -700 },
    },
  }),
  "steam-cracking-plant-1": defineDynamicRecipe({
    id: "steam-cracking-plant-1",
    machineId: "steam-cracking-plant",
    options: {
      "steam-temperature": rangeOption({
        id: "steam-temperature",
        label: "Steam Temperature",
        initialValue: 363.63,
        map: {
          0: 30,
          90.09: 22.5,
          180.18: 15,
          270.27: 7.5,
          363.63: 3,
        },
      }),
    },
    resolveRecipe(values) {
      const time =
        this.options["steam-temperature"].map[values["steam-temperature"]];

      return {
        inputs: [
          { resourceId: "crude-oil", amount: 2 },
          { resourceId: "steam", amount: 150 },
        ],
        outputs: [
          { resourceId: "paraxylene", amount: 2 },
          { resourceId: "ethylene", amount: 3 },
        ],
        time: time,
        environmentals: { power: -60e3, pollution: 0.432 },
      };
    },
  }),
  "mineshaft-drill": defineDynamicRecipe({
    id: "mineshaft-drill",
    machineId: "mineshaft-drill",
    options: {
      "drill-head": selectOption<
        string,
        { id: ResourceId; getMulti: (d: number) => number }
      >({
        id: "drill-head",
        label: "Drill Head",
        initialValue: "copper-drill-head",
        map: {
          "Copper Drill Head": {
            id: "copper-drill-head",
            getMulti: (d) => d / 150,
          },
          "Iron Drill Head": {
            id: "iron-drill-head",
            getMulti: (d) => 0.04 * d ** 0.25,
          },
          "Steel Drill Head": {
            id: "steel-drill-head",
            getMulti: (d) => 0.02 * d ** 0.25,
          },
          "Tungsten Carbide Drill Head": {
            id: "tungsten-carbide-drill-head",
            getMulti: (d) => 0.005 * d ** 0.25,
          },
        },
      }),
      acid: selectOption<
        string,
        {
          id: ResourceId | null;
          rate: number;
          getMulti: (d: number) => number;
        }
      >({
        id: "acid",
        label: "Acid",
        initialValue: "None",
        map: {
          None: { id: null, rate: 0, getMulti: (d: number) => d ** 2 / 900e3 },
          Water: {
            id: "water",
            rate: 10,
            getMulti: (d) => d ** 2 / 1875e3,
          },
          "Acetic Acid": {
            id: "acetic-acid",
            rate: 3,
            getMulti: (d) => d ** 0.8 / 450,
          },
          "Sulfuric Acid": {
            id: "sulfuric-acid",
            rate: 1,
            getMulti: (d) => 0.09 * d ** 0.25,
          },
          "Hydrochloric Acid": {
            id: "hydrochloric-acid",
            rate: 1.5,
            getMulti: (d) =>
              d < 6000
                ? 0.000013 * d ** (1.5 - 0.00005 * d) +
                  4.3875 * 10 ** -13.3 * d ** 3
                : 0.09 * d ** 0.25,
          },
        },
      }),
      "machine-oil": checkBoxOption({
        id: "machine-oil",
        label: "Machine Oil",
        initialValue: false,
      }),
      depth: selectOption<number, ResourceAmount[]>({
        id: "depth",
        label: "Depth",
        initialValue: 100,
        map: {
          100: [
            { resourceId: "sand", amount: 3 },
            { resourceId: "gravel", amount: 3 },
            { resourceId: "soil", amount: 3 },
            { resourceId: "rich-soil", amount: 1 },
          ],
          300: [
            { resourceId: "sand", amount: 3 },
            { resourceId: "gravel", amount: 3 },
            { resourceId: "soil", amount: 3 },
            { resourceId: "rich-soil", amount: 1 },
          ],
          900: [
            { resourceId: "coal", amount: 6 },
            { resourceId: "gravel", amount: 9 },
            { resourceId: "raw-iron", amount: 5 },
            { resourceId: "raw-copper", amount: 5 },
          ],
          1200: [
            { resourceId: "coal", amount: 20 },
            { resourceId: "gravel", amount: 6 },
            { resourceId: "raw-iron", amount: 10 },
            { resourceId: "shallow-earth-fragment", amount: 3 },
          ],
          1500: [
            { resourceId: "raw-lead", amount: 1 },
            { resourceId: "gravel", amount: 8 },
            { resourceId: "raw-iron", amount: 8 },
            { resourceId: "shallow-earth-fragment", amount: 5 },
          ],
          1800: [
            { resourceId: "raw-lead", amount: 5 },
            { resourceId: "rock", amount: 8 },
            { resourceId: "medium-earth-fragment", amount: 2 },
            { resourceId: "shallow-earth-fragment", amount: 1 },
          ],
          2000: [
            { resourceId: "raw-lead", amount: 9.3 },
            { resourceId: "medium-earth-fragment", amount: 3.4 },
            { resourceId: "rock", amount: 9.4 },
          ],
          2200: [
            { resourceId: "raw-iron", amount: 9.6 },
            { resourceId: "shallow-earth-fragment", amount: 2.3 },
            { resourceId: "raw-lead", amount: 5.1 },
            { resourceId: "medium-earth-fragment", amount: 3.1 },
          ],
          2400: [
            { resourceId: "medium-earth-fragment", amount: 4.5 },
            { resourceId: "rock", amount: 9.8 },
          ],
          2600: [
            { resourceId: "medium-earth-fragment", amount: 8.4 },
            { resourceId: "rock", amount: 10.2 },
          ],
          2800: [
            { resourceId: "gravel", amount: 1.8 },
            { resourceId: "raw-iron", amount: 10.4 },
            { resourceId: "shallow-earth-fragment", amount: 2.5 },
            { resourceId: "raw-lead", amount: 2.9 },
          ],
          3000: [
            { resourceId: "shallow-earth-fragment", amount: 1.5 },
            { resourceId: "raw-lead", amount: 1.9 },
            { resourceId: "rock", amount: 6 },
          ],
          3200: [
            { resourceId: "rock", amount: 5.1 },
            { resourceId: "medium-earth-fragment", amount: 4.6 },
            { resourceId: "raw-lead", amount: 3.1 },
            { resourceId: "raw-iron", amount: 6.5 },
          ],
          3400: [
            { resourceId: "raw-iron", amount: 8.3 },
            { resourceId: "raw-lead", amount: 8.6 },
            { resourceId: "rock", amount: 7.8 },
          ],
          3600: [
            { resourceId: "medium-earth-fragment", amount: 6.3 },
            { resourceId: "raw-lead", amount: 6.4 },
            { resourceId: "rock", amount: 6.2 },
          ],
          3800: [
            { resourceId: "medium-earth-fragment", amount: 6.4 },
            { resourceId: "rock", amount: 9.6 },
            { resourceId: "raw-lead", amount: 3.5 },
            { resourceId: "coal", amount: 30.4 },
          ],
          4000: [
            { resourceId: "table-salt", amount: 58.5 },
            { resourceId: "medium-earth-fragment", amount: 3.7 },
            { resourceId: "rock", amount: 5.9 },
            { resourceId: "raw-lead", amount: 9.6 },
          ],
          4200: [
            { resourceId: "medium-earth-fragment", amount: 6.3 },
            { resourceId: "rock", amount: 5 },
            { resourceId: "raw-lead", amount: 4.8 },
            { resourceId: "coal", amount: 39.3 },
          ],
          4400: [
            { resourceId: "rock", amount: 14.8 },
            { resourceId: "coal", amount: 40.2 },
          ],
          4600: [
            { resourceId: "raw-zinc", amount: 7.6 },
            { resourceId: "bauxite-residue", amount: 1.6 },
            { resourceId: "rock", amount: 7.8 },
          ],
          4800: [
            { resourceId: "medium-earth-fragment", amount: 7.8 },
            { resourceId: "raw-zinc", amount: 9.8 },
            { resourceId: "bauxite-residue", amount: 1.2 },
            { resourceId: "rock", amount: 2.6 },
          ],
          5000: [
            { resourceId: "medium-earth-fragment", amount: 10.9 },
            { resourceId: "raw-zinc", amount: 4.8 },
            { resourceId: "bauxite-residue", amount: 1.2 },
            { resourceId: "rock", amount: 5.2 },
          ],
          5200: [
            { resourceId: "raw-iron", amount: 21.6 },
            { resourceId: "rock", amount: 7.6 },
            { resourceId: "deep-earth-fragment", amount: 1.4 },
            { resourceId: "raw-lead", amount: 4.8 },
          ],
          5400: [
            { resourceId: "medium-earth-fragment", amount: 9.5 },
            { resourceId: "bauxite-residue", amount: 1 },
            { resourceId: "rock", amount: 8.5 },
          ],
          5600: [
            { resourceId: "rock", amount: 5.4 },
            { resourceId: "raw-lead", amount: 3.8 },
            { resourceId: "raw-copper", amount: 18.3 },
            { resourceId: "bauxite-residue", amount: 0.9 },
          ],
          5800: [
            { resourceId: "medium-earth-fragment", amount: 10.9 },
            { resourceId: "raw-lead", amount: 15.8 },
          ],
          6000: [
            { resourceId: "coal", amount: 54 },
            { resourceId: "raw-lead", amount: 12.1 },
            { resourceId: "rock", amount: 5.2 },
          ],
          6200: [
            { resourceId: "raw-copper", amount: 50.7 },
            { resourceId: "deep-earth-fragment", amount: 4.4 },
            { resourceId: "bauxite-residue", amount: 1 },
            { resourceId: "rock", amount: 6.6 },
          ],
          6400: [
            { resourceId: "bauxite-residue", amount: 2.3 },
            { resourceId: "deep-earth-fragment", amount: 7.7 },
            { resourceId: "rock", amount: 7.7 },
          ],
          6600: [
            { resourceId: "rock", amount: 8.8 },
            { resourceId: "deep-earth-fragment", amount: 9 },
            { resourceId: "bauxite-residue", amount: 1.9 },
          ],
          6800: [
            { resourceId: "raw-copper", amount: 80.8 },
            { resourceId: "bauxite-residue", amount: 1.6 },
            { resourceId: "deep-earth-fragment", amount: 5.9 },
            { resourceId: "rock", amount: 10.4 },
          ],
          7000: [
            { resourceId: "raw-lead", amount: 4.3 },
            { resourceId: "deep-earth-fragment", amount: 10.9 },
            { resourceId: "rock", amount: 11.7 },
            { resourceId: "bauxite-residue", amount: 1.3 },
          ],
          7200: [
            { resourceId: "raw-lead", amount: 5.5 },
            { resourceId: "bauxite-residue", amount: 1.1 },
            { resourceId: "deep-earth-fragment", amount: 8.6 },
            { resourceId: "rock", amount: 10.8 },
          ],
          7400: [
            { resourceId: "raw-copper", amount: 43 },
            { resourceId: "bauxite-residue", amount: 1.1 },
            { resourceId: "deep-earth-fragment", amount: 8.7 },
            { resourceId: "rock", amount: 11.4 },
          ],
          7600: [
            { resourceId: "deep-earth-fragment", amount: 4.9 },
            { resourceId: "bauxite-residue", amount: 1 },
            { resourceId: "rock", amount: 9.8 },
          ],
          7800: [
            { resourceId: "medium-earth-fragment", amount: 7.6 },
            { resourceId: "bauxite-residue", amount: 2.2 },
            { resourceId: "deep-earth-fragment", amount: 8.4 },
          ],
          8000: [
            { resourceId: "bauxite-residue", amount: 2.1 },
            { resourceId: "rock", amount: 10.7 },
            { resourceId: "deep-earth-fragment", amount: 11.7 },
          ],
        },
      }),
    },
    resolveRecipe(values) {
      const drillHead = this.options["drill-head"].map[values["drill-head"]];
      const acid = this.options.acid.map[values.acid];
      const machineOil = values["machine-oil"];

      const durabilityRate =
        0.5 *
        drillHead.getMulti(values.depth) *
        acid.getMulti(values.depth) *
        (machineOil ? 1.1 : 1);

      const replacementTime = 12;
      const travelTime = (2 * values.depth) / (machineOil ? 100 : 50);
      const drillTime = Math.ceil(100 / durabilityRate);
      const period = replacementTime + travelTime + drillTime;

      const inputs: ResourceAmount[] = [
        { resourceId: drillHead.id, amount: 1 },
      ];
      if (acid.id !== null)
        inputs.push({ resourceId: acid.id, amount: acid.rate * drillTime });
      if (machineOil)
        inputs.push({
          resourceId: "machine-oil",
          amount: 2 * (travelTime + drillTime),
        });

      const outputs = this.options.depth.map[values.depth].map((ra) => {
        ra.amount *= drillTime;
        return ra;
      });

      return {
        inputs: inputs,
        outputs: outputs,
        time: period,
        environmentals: {
          power: 3e6 * (drillTime / period) + 0.1e6,
          pollution: 0.02,
        },
      };
    },
  }),
});

export type RecipeId = keyof typeof recipeRegistry;

export type RecipeOptionValue<T extends RecipeId> =
  (typeof recipeRegistry)[T] extends DynamicRecipe<infer Options>
    ? { [K in keyof Options]: Options[K]["initialValue"] }
    : never;
