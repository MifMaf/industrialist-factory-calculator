type ResourceCategory = "item" | "fluid" | "power" | "pollution";

export type Resource = {
  id: string;
  name: string;
  imageSrc?: string;
  category: ResourceCategory;
};
