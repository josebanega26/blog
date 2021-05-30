import { appTypes, AppActions } from "./type";
import { LocalNew } from "../types";
import { updateLocalPostList } from "../utils/index";

export interface InitialState {
  localPosts: LocalNew[];
  selectedPost: LocalNew | undefined;
}

const getInitStateFromStorage = (): InitialState | undefined => {
  // Need this verification to avoid error from SSR rendering from next
  // if (typeof window !== "undefined") {
  // const stateFromStorage = localStorage.getItem("state") || "";
  // return JSON.parse(stateFromStorage) || undefined;
  // }
  return undefined
};
export const initialState: InitialState = getInitStateFromStorage() || {
  localPosts: [],
  selectedPost: undefined,
};

type PostState = typeof initialState;

export const postReducer = (state: PostState, action: AppActions) => {
  console.log("here in reducer");
  switch (action.type) {
    case appTypes.CREATE:
      return {
        ...state,
        localPosts: [action.payload, ...state.localPosts],
      };
    case appTypes.SELECT:
      return {
        ...state,
        selectedPost: { ...action.payload },
      };
    case appTypes.UPDATE:
      return {
        ...state,
        localPosts: updateLocalPostList(state.localPosts, action.payload),
      };
    case appTypes.DELETE:
      console.log("here deleted");
      return {
        ...state,
        localPosts: [
          ...state.localPosts.filter((post) => post.id !== action.payload),
        ],
      };
    case appTypes.CLEAN_SELECT:
      return {
        ...state,
        selectedPost: undefined,
      };
    default:
      return state;
  }
};
