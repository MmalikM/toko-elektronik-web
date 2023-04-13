import { fetchCategory, loadingCategories } from "./actionType";

// const BaseUrl = "http://localhost:3000/admin/categories/";
const BaseUrl = "https://toko-electronic.malikmusthofa.site/admin/categories/";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(BaseUrl , {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!data.ok) throw await data.text();

      const result = await data.json();
      dispatch(fetchCategorySuccess(result));
      dispatch(loadingCategorySucsess());
    } catch (err) {
      throw err;
    }
  };
};

export const createCategory = (input) => {
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
      dispatch(fetchCategories());
      return result;
    } catch (error) {
      throw error;
    }
  };
};

export const destroyCategory = (id) =>{
  return async (dispatch)=>{
    try {
      const data = await fetch(BaseUrl + id,{
        method:"DELETE",
        headers:{
          access_token: localStorage.access_token,
        }
      })
      if (!data.ok) throw await data.json();
      const result = await data.json();
      dispatch(fetchCategories());
      return result;
    } catch (error) {
      throw (error)
    }
  }
}

export const updateCategory = (id,input) =>{
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
      dispatch(fetchCategories());
      return result;
    } catch (error) {
      throw (error)
    }
  }
}

export const fetchCategorySuccess = (payload) => {
  return {
    type: fetchCategory,
    payload,
  };
};
export const loadingCategorySucsess = () => {
  return {
    type: loadingCategories,
    payload: false,
  };
};
