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
  environmentals: Partial<Record<EnvironmentalId, number>>;
};

interface BaseOption<Type extends string, T> {
  inputType: Type;
  id: string;
  label: string;
  initialValue: T;
}

export interface CheckBoxOption extends BaseOption<"checkbox", boolean> {}

export interface NumberOption extends BaseOption<"number", number> {
  min: number;
  max: number;
  step: number;
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

export type DynamicRecipe<O extends Record<string, Option>> = {
  type: "dynamic";
  id: string;
  machineId: MachineId;
  options: O;
  resolveRecipe(
    this: DynamicRecipe<O>,
    values: { [K in keyof O]: O[K]["initialValue"] }
  ): ResolvedRecipe;
};

export type Recipe = StaticRecipe | DynamicRecipe<Record<string, Option>>;
