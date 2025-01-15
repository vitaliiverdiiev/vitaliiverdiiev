import { IIconName } from "@/shared/ui";

export type Path = "home" | "resume" | "dojo";

export type Route = {
  label: string;
  path: (param?: string) => string;
  icon?: IIconName | null;
};

export type Routes = {
  [K in Path]: Route;
};
