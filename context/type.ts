import { LocalNew } from '../types';

export const appTypes = {
  CREATE: "[posts] create",
  UPDATE: "[posts] update",
  DELETE: "[posts] delete",
  SELECT: "[selected-post] select",
  CLEAN_SELECT: "[selected-post] clean"

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
export interface SelectPost {
  payload: LocalNew;
  type: typeof appTypes.SELECT;
}

export interface CleanSelectPost {
  type: typeof appTypes.CLEAN_SELECT;
}

export type AppActions = CreatePost | DeletePost | UpdatePost | SelectPost | CleanSelectPost;
