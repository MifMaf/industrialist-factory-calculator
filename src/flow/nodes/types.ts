import type { Node, BuiltInNode } from "@xyflow/react";
import { RecipeId, RecipeOptionValue } from "../../data/recipes";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type RecipeNode<T extends RecipeId> = Node<
  {
    recipeId: T;
    optionValues?: RecipeOptionValue<T>;
    fixed: boolean;
    machineCount: number | null;
  },
  "recipe-node"
>;
export type AppNode = BuiltInNode | PositionLoggerNode | RecipeNode<RecipeId>;
