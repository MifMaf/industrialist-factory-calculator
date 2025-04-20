import { DynamicRecipe } from "./types";
import {
  createRecipeRegistry,
  defineDynamicRecipe,
  defineStaticRecipe,
  rangeOption,
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
});

export type RecipeId = keyof typeof recipeRegistry;

export type RecipeOptionValue<T extends RecipeId> =
  (typeof recipeRegistry)[T] extends DynamicRecipe<infer Options>
    ? { [K in keyof Options]: Options[K]["initialValue"] }
    : never;
