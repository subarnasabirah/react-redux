import { combineReducers } from "redux";
import { productReducer, selectedProdutReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProdutReducer,
});

export default reducers;