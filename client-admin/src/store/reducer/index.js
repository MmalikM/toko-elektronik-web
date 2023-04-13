import { combineReducers } from "redux"
import category from "./category"
import product from "./product"


const rootReducer= combineReducers({
    products: product,
    categories: category,
})


export default rootReducer