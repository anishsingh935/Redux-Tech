import { combineReducers } from "redux";
import componentReducer from "./index";

const reducers = combineReducers({
    value:componentReducer
})

export default reducers;