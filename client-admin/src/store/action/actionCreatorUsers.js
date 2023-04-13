const BaseUrl = "https://toko-electronic.malikmusthofa.site/";
// const BaseUrl = "http://localhost:3000/";


export const Register = (inputRegister) => {
  return async () => {
    try {
      const data = await fetch(BaseUrl + "register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(inputRegister),
      });

      if (!data.ok) throw await data.json();
      const result = await data.json();
      return result;
    } catch (error) {
      throw error;
    }
  };
};

export const Login = (inputLogin) => {
  return async () => {
    try {
      const data = await fetch(BaseUrl + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputLogin),
      });

      if (!data.ok) throw await data.json();
      const result = await data.json();
      return result;
    } catch (err) {
      throw err;
    }
  };
};
