import { combineReducers } from "redux";
import todos from "../Features/Todos/reducer";
const rootReducers = combineReducers({ todos });

export default rootReducers;
