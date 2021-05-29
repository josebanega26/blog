export const validateImgExtension = (
  file: File,
  allowedExtension = ["jpeg", "jpg", "png"]
) => {
  const fileExtension = file.name.split(".").pop()?.toLowerCase() as string;
  const isValidFile = !!allowedExtension.includes(fileExtension);
  console.log(`isValidFile`, isValidFile);
  if (!isValidFile) {
    alert("Allowed Extensions are : *." + allowedExtension.join(", *."));
  }
  return isValidFile;
};
