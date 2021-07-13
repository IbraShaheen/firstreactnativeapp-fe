import productReducer from "./productReducer";
import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";



const rootReducer = combineReducers({
  products: productReducer,
  shops : shopReducer,
  items : cartReducer,

})

export default rootReducer;