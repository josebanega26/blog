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
