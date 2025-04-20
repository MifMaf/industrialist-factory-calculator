import {
  CheckBoxOption,
  DynamicRecipe,
  NumberOption,
  Option,
  RangeOption,
  Recipe,
  SelectOption,
  StaticRecipe,
} from "./types";

export function defineStaticRecipe(
  r: Omit<StaticRecipe, "type">
): StaticRecipe {
  return { type: "static", ...r };
}

export function defineDynamicRecipe<O extends Record<string, Option>>(
  r: Omit<DynamicRecipe<O>, "type">
): DynamicRecipe<O> {
  return { type: "dynamic", ...r };
}

export function createRecipeRegistry<R extends Record<string, Recipe>>(
  reg: R
): R {
  return reg;
}

export function checkBoxOption(
  config: Omit<CheckBoxOption, "inputType">
): CheckBoxOption {
  return { inputType: "checkbox", ...config };
}

export function numberOption(
  config: Omit<NumberOption, "inputType">
): NumberOption {
  return { inputType: "number", ...config };
}

export function selectOption<Key extends string | number, Mapped>(
  config: Omit<SelectOption<Key, Mapped>, "inputType">
): SelectOption<Key, Mapped> {
  return { inputType: "select", ...config };
}

export function rangeOption<Key extends string | number, Mapped>(
  config: Omit<RangeOption<Key, Mapped>, "inputType">
): RangeOption<Key, Mapped> {
  return { inputType: "select", ...config };
}
