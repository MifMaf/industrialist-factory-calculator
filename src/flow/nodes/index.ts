import type { NodeTypes } from "@xyflow/react";

import { AppNode } from "./types";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { MachineNode } from "./MachineNode";

export const initialNodes: AppNode[] = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me!" },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
  },
  {
    id: "e",
    type: "machine-node",
    position: { x: -100, y: -100 },
    data: {
      recipeId: "steam-cracking-plant-1",
      fixed: false,
      machineCount: null,
    },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "machine-node": MachineNode,
} satisfies NodeTypes;
