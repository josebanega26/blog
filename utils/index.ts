import { LocalNew } from '../types';

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