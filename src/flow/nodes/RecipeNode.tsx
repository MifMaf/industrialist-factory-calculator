import { type NodeProps } from "@xyflow/react";

import { type RecipeNode } from "./types";
import { recipeRegistry } from "../../data/recipes";
import { machineRegistry } from "../../data/machines";

export function RecipeNode({ data }: NodeProps<RecipeNode>) {
  const recipe = recipeRegistry[data.recipeId];
  const machine = machineRegistry[recipe.machineId];

  return (
    <div
      className="react-flow__node-default"
      style={{ backgroundColor: machine.bgColor }}
    >
      {data.machineCount != null && data.machineCount} {machine.name}
    </div>
  );
}
