export const validateEmail = (email: string): boolean => {
  let data = JSON.parse(localStorage.getItem("comments") || "[]");
  let emailExists = data.find((item: any) => item.useremail === email);
  if (emailExists) {
    return true;
  } else {
    return false;
  }
};
