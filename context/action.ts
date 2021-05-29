import { CreatePost, UpdatePost, appTypes, DeletePost } from "./type";
import { LocalNew } from "../types";

export const createPost = (payload: LocalNew): CreatePost => ({
  type: appTypes.CREATE,
  payload,
});

export const updatePost = (payload: LocalNew): UpdatePost => ({
  type: appTypes.UPDATE,
  payload,
});

export const deletePost = (payload: LocalNew): DeletePost => ({
  type: appTypes.DELETE,
  payload,
});
