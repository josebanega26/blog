import { LocalNew } from "../types";

export const appTypes = {
  CREATE: "[post] create",
  UPDATE: "[post] update",
  DELETE: "[post] delete",
} as const;

export interface CreatePost {
  payload: LocalNew;
  type: typeof appTypes.CREATE;
}

export interface DeletePost {
  payload: string;
  type: typeof appTypes.DELETE;
}
export interface UpdatePost {
  payload: LocalNew;
  type: typeof appTypes.UPDATE;
}

export type AppActions = CreatePost | DeletePost | UpdatePost;
