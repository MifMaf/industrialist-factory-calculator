import { type NodeProps } from "@xyflow/react";

import { type RecipeNode } from "./types";
import { recipeRegistry } from "../../data/recipes";
import { machineRegistry } from "../../data/machines";

export function RecipeNode({ data }: NodeProps<RecipeNode>) {
  const recipe = recipeRegistry[data.recipeId];
  const machine = machineRegistry[recipe.machineId];

  const recipe2 = recipeRegistry["mineshaft-drill"];
  const resolvedRecipe = recipe2.resolveRecipe({
    "drill-head": "Steel Drill Head",
    acid: "Hydrochloric Acid",
    "machine-oil": true,
    depth: 8000,
  });
  let string = "";
  for (const a of [...resolvedRecipe.inputs, ...resolvedRecipe.outputs])
    string += `${a.resourceId}: ${a.amount} `;
  string += `Time: ${resolvedRecipe.time}s Power: ${resolvedRecipe.environmentals.power}MF/s Pollution: ${resolvedRecipe.environmentals.pollution}%/h`;

  return (
    <div
      className="react-flow__node-default"
      style={{ backgroundColor: machine.bgColor }}
    >
      {data.machineCount != null && data.machineCount} {machine.name}
      <br />
      {string}
    </div>
  );
}
