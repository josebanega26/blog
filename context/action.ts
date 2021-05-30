import {
  CreatePost,
  UpdatePost,
  appTypes,
  DeletePost,
  SelectPost,
} from "./type";
import { LocalNew } from "../types";
import { CleanSelectPost } from "./type";

export const createPost = (payload: LocalNew): CreatePost => ({
  type: appTypes.CREATE,
  payload,
});

export const updatePost = (payload: LocalNew): UpdatePost => ({
  type: appTypes.UPDATE,
  payload,
});

export const deletePost = (payload: string): DeletePost => ({
  type: appTypes.DELETE,
  payload,
});

export const selectPost = (payload: LocalNew): SelectPost => ({
  type: appTypes.SELECT,
  payload,
});

export const cleanSelectPost = (): CleanSelectPost => ({
  type: appTypes.CLEAN_SELECT,
});
