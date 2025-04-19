import { DynamicRecipe, Option, StaticRecipe } from "./types";

export function createRecipeRegistry<T>(recipes: T) {
  return recipes;
}

export function defineStaticRecipe(
  input: Omit<StaticRecipe, "type">
): StaticRecipe {
  return { type: "static", ...input };
}

export function defineDynamicRecipe<
  Options extends Record<string, Option<unknown>>
>(input: Omit<DynamicRecipe<Options>, "type">): DynamicRecipe<Options> {
  return { type: "dynamic", ...input };
}

export function numberOption(config: {
  id: string;
  label: string;
  initialValue: number;
  min?: number;
  max?: number;
  step?: number;
}): Option<number> {
  return {
    id: config.id,
    label: config.label,
    inputType: "number",
    initialValue: config.initialValue,
    attributes: {
      min: config.min,
      max: config.max,
      step: config.step,
    },
  };
}

export function selectOption<T>(config: {
  id: string;
  label: string;
  initialValue: T;
  options: T[];
}): Option<T> {
  return {
    id: config.id,
    label: config.label,
    inputType: "select",
    initialValue: config.initialValue,
    attributes: {
      options: config.options,
    },
  };
}

export function rangeOption(config: {
  id: string;
  label: string;
  initialValue: number;
  values: number[];
}): Option<number> {
  return {
    id: config.id,
    label: config.label,
    inputType: "range",
    initialValue: config.initialValue,
    attributes: {
      values: config.values,
    },
  };
}
