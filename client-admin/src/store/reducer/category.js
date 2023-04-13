const initialState = { categories: [], loadingcategories: false };
function category(state = initialState, action) {
  switch (action.type) {
    case "fetchCategory":
      return {
        ...state,
        categories: action.payload,
      };
    case "loadingCategory":
      return {
        ...state,
        loadingCategories: action.payload,
      };
    default:
      return state;
  }
}

export default category;
