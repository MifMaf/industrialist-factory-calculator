import type { Node, BuiltInNode } from "@xyflow/react";
import { RecipeId, RecipeOptionValues } from "../../data/recipes";
import { RecipeNode } from "./RecipeNode";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type RecipeNode = {
  [Id in RecipeId]: Node<
    {
      recipeId: Id;
      optionValues: RecipeOptionValues<Id>;
      machineCount: number | null;
    },
    "recipe-node"
  >;
}[RecipeId];
export type AppNode = BuiltInNode | PositionLoggerNode | RecipeNode;
