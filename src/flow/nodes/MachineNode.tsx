import { type NodeProps } from "@xyflow/react";

import { type MachineNode } from "./types";
import { RecipeId, recipeRegistry } from "../../data/recipes";
import { machineRegistry } from "../../data/machines";

export function MachineNode({ data }: NodeProps<MachineNode<RecipeId>>) {
  const machine = machineRegistry[recipeRegistry[data.recipeId].machineId];

  return (
    <div
      className="react-flow__node-default"
      style={{ backgroundColor: machine.bgColor ?? "white" }}
    >
      {data.machineCount != null && data.machineCount} {machine.name}
    </div>
  );
}
