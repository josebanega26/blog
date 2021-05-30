import { appTypes, AppActions } from "./type";
import { LocalNew } from "../types";
import { updateLocalPostList } from "../utils/index";

export interface InitialState {
  localPosts: LocalNew[];
  selectedPost: LocalNew | undefined;
}

export const initialState: InitialState = {
  localPosts: [],
  selectedPost: undefined,
};

type PostState = typeof initialState;

export const postReducer = (state: PostState, action: AppActions) => {
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
      case appTypes.SET_STATE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
