import React from "react";

type BackgroundColor = React.CSSProperties["backgroundColor"];

export type Machine = {
  id: string;
  name: string;
  bgColor?: BackgroundColor;
};
