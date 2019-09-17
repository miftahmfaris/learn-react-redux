import { combineReducers } from "redux";

import count from "./count.js";
import form from "./form.js";

const rootReducer = combineReducers({
    count,
    form
});

export default rootReducer;
