import { LocalNew } from '../types';
import { InitialState } from '../context/reducer';

export const validateImgExtension = (
  file: File,
  allowedExtension = ["jpeg", "jpg", "png"]
) => {
  const fileExtension = file.name.split(".").pop()?.toLowerCase() as string;
  const isValidFile = !!allowedExtension.includes(fileExtension);
  if (!isValidFile) {
    alert("Allowed Extensions are : *." + allowedExtension.join(", *."));
  }
  return isValidFile;
};

export const updateLocalPostList = (postList : LocalNew[], updatedPost : LocalNew) => {
  const newPostList = postList.filter(({id})=> id !== updatedPost.id)
  return [updatedPost,...newPostList]
}
export const getInitStateFromStorage = (): InitialState | undefined => {
  // Need this verification to avoid error from SSR rendering from next
  if (window !== undefined) {
    const stateFromStorage = localStorage.getItem("state") || "";
    console.log(`stateFromStorage`, stateFromStorage);
    return JSON.parse(stateFromStorage) || undefined;
  }
  return undefined;
};