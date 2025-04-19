import { type NodeProps } from "@xyflow/react";
import { useState } from "react";

import { type MachineNode } from "./types";
import { RecipeId } from "../data/recipes";

export function MachineNode({ data }: NodeProps<MachineNode<RecipeId>>) {
  const [count, setCount] = useState(0);

  return (
    <div className="react-flow__node-default">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>{data.recipeId}</p>
    </div>
  );
}
