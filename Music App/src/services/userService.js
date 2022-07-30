export const saveUser = (user) => {
  if (user.accessToken) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const delUser = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  let serialUser = localStorage.getItem("user");

  if (serialUser) {
    let user = JSON.parse(serialUser);
    return user;
  }
};

export const getToken = () => getUser()?.accessToken;
