import { appTypes, AppActions } from "./type";
import { LocalNew } from "../types";

export const initialState = {
  localPosts: [] as LocalNew[],
};

type PostState = typeof initialState;

export const postReducer = (state: PostState, action: AppActions) => {
  switch (action.type) {
    case appTypes.CREATE:
      return {
        ...state,
        localPosts: [...state.localPosts, action.payload],
      };
    case appTypes.DELETE:
      return {
        ...state,
        localPosts: [
          ...state.localPosts.filter((post) => post.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
