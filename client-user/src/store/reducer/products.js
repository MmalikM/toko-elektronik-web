// import { fetchProduct, loadingProduct } from "../action/actionType";

const initialState = {
  products: [],
  detailProduct: [],
  loadingProducts: false,
};

function product(state = initialState, action) {
  switch (action.type) {
    case "fetchProduct":
      return {
        ...state,
        products: action.payload,
      };
      case "getDetailProduct":
        return {
          ...state,
          detailProduct: action.payload,
        };
    case "loadingProduct":
      return {
        ...state,
        loadingProducts: action.payload,
      };
    default:
      return state;
  }
}

export default product;
