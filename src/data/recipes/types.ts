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

export type Option<T> = {
  inputType: "number" | "select" | "range";
  id: string;
  label: string;
  initialValue: T;
  attributes?: Record<string, unknown>;
};

export type StaticRecipe = {
  type: "static";
  id: string;
  machineId: MachineId;
  resolvedRecipe: ResolvedRecipe;
};

export type DynamicRecipe<Options extends Record<string, Option<unknown>>> = {
  type: "dynamic";
  id: string;
  machineId: MachineId;
  options: Options;
  resolveRecipe: (values: {
    [K in keyof Options]: Options[K]["initialValue"];
  }) => ResolvedRecipe;
};

export type Recipe =
  | StaticRecipe
  | DynamicRecipe<Record<string, Option<unknown>>>;
