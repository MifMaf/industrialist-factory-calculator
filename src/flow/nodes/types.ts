import type { Node, BuiltInNode } from "@xyflow/react";
import { RecipeId, RecipeOptionValue } from "../../data/recipes";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type MachineNode<T extends RecipeId> = Node<
  {
    recipeId: T;
    optionValues?: RecipeOptionValue<T>;
    fixed: boolean;
    machineCount: number | null;
  },
  "machine-node"
>;
export type AppNode = BuiltInNode | PositionLoggerNode | MachineNode<RecipeId>;
