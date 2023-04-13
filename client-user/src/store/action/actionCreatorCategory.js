// const BaseUrl = "https://toko-electronic.malikmusthofa.site/customers/categories/";
const BaseUrl = "http://localhost:3000/customers/categories/";


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

  export const fetchCategorySuccess = (payload) => {
    return {
      type: "fetchCategory",
      payload,
    };
  };
  export const loadingCategorySucsess = () => {
    return {
      type: "loadingCategories",
      payload: false,
    };
  };
  