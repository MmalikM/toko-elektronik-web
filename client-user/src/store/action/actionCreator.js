// const BaseUrl = "http://localhost:3000/customers/products/";
const BaseUrl = "https://toko-electronic.malikmusthofa.site/customers/products/"

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(BaseUrl);
      if (!data.ok) throw await data.text();
      const result = await data.json();
      dispatch(fetchDataSuccess(result));
      dispatch(loadingProductSucsess());
    } catch (error) {
      throw error;
    }
  };
};

export const detailProducts = (id) => {
    return async (dispatch) => {
        try {
            const data = await fetch(BaseUrl+id);
            if (!data.ok) throw await data.text();
            const result = await data.json();
            dispatch(getDetailProduct(result));
            dispatch(loadingProductSucsess());
        } catch (error) {
            throw error;
        }
    };
}

export const getDetailProduct = (payload) => {
    return {
      type: "getDetailProduct",
      payload,
    };
  };

export const fetchDataSuccess = (payload) => {
  return {
    type: "fetchProduct",
    payload,
  };
};
export const loadingProductSucsess = () => {
  return {
    type: "loadingProduct",
    payload: false,
  };
};
