import { fetchProduct, loadingProduct } from "./actionType";

// const BaseUrl = "http://localhost:3000/admin/products/";
const BaseUrl = "https://toko-electronic.malikmusthofa.site/admin/products/";


export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(BaseUrl, {
        headers: {
          access_token: localStorage.access_token
        },
      });
      if (!data.ok) throw await data.json();
      const result = await data.json();
      dispatch(fetchDataSuccess(result));
      dispatch(loadingProductSucsess());
    } catch (err) {
      throw err;
    }
  };
};

export const fetchDataSuccess = (payload) => {
  return {
    type: fetchProduct,
    payload,
  };
};

export const createProduct = (input) => {
  return async (dispatch) => {
    try {
      const data = await fetch(BaseUrl , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(input),
      });
      if (!data.ok) throw await data.json();
      const result = await data.json();
      dispatch(fetchProducts());
      return result;
    } catch (error) {
      throw error;
    }
  };
};

export const updateProduct = (id,input) =>{
  return async (dispatch) =>{
    try {
      const data = await fetch(BaseUrl + id,{
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(input),
      })
      if (!data.ok) throw await data.json();
      const result = await data.json();
      dispatch(fetchProducts());
      return result;
    } catch (error) {
      throw (error)
    }
  }
}

export const destroyProduct = (id) =>{
  return async (dispatch)=>{
    try {
      const data = await fetch(BaseUrl + id,{
        method:"DELETE",
        headers:{
          access_token: localStorage.access_token,
        }
      })
      if (!data.ok) throw await data.text();
      const result = await data.json();
      dispatch(fetchProducts());
      return result;
    } catch (error) {
      throw (error)
    }
  }
}


export const loadingProductSucsess = () => {
  return {
    type: loadingProduct,
    payload: false,
  };
};
