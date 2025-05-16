import { ResourceId } from "../resources";
import { EnvironmentalId } from "../environmentals";
import { MachineId } from "../machines";

export type ResourceAmount = {
  resourceId: ResourceId;
  amount: number;
};

export type ResolvedRecipe = {
  inputs: ResourceAmount[];
  outputs: ResourceAmount[];
  time: number;
  environmentals: Record<EnvironmentalId, number>;
};

interface BaseOption<OptionType extends string, T> {
  inputType: OptionType;
  id: string;
  label: string;
  initialValue: T;
}

export interface CheckBoxOption extends BaseOption<"checkbox", boolean> {}

export interface NumberOption extends BaseOption<"number", number> {
  min: number;
  max: number;
  snapToNumber(number: number): number;
}

export interface SelectOption<Key extends string | number, Mapped>
  extends BaseOption<"select", Key> {
  map: Record<Key, Mapped>;
}

export interface RangeOption<Key extends string | number, Mapped>
  extends BaseOption<"select", Key> {
  map: Record<Key, Mapped>;
}

export type Option =
  | CheckBoxOption
  | NumberOption
  | SelectOption<string | number, unknown>
  | RangeOption<string | number, unknown>;

export type StaticRecipe = {
  type: "static";
  id: string;
  machineId: MachineId;
  resolvedRecipe: ResolvedRecipe;
};

export type DynamicRecipe<Options extends Record<string, Option>> = {
  type: "dynamic";
  id: string;
  machineId: MachineId;
  options: Options;
  resolveRecipe(
    this: DynamicRecipe<Options>,
    values: { [K in keyof Options]: Options[K]["initialValue"] }
  ): ResolvedRecipe;
};

export type Recipe = StaticRecipe | DynamicRecipe<Record<string, Option>>;
