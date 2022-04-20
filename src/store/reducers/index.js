import {combineReducers} from "redux";
import MyReducer from "./myReducer";

const rootReducer = combineReducers({
    myReducer: MyReducer
})

export default rootReducer