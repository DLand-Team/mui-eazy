import { lazy } from "react";
export * from "./types";
export const Editor = lazy(() => import("./lazy"));
