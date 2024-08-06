import { configureStore } from "@reduxjs/toolkit";
import xeMayReducer from "../reducers/xeMayReducer";

export default configureStore({
    reducer: {
        listXeMayStore: xeMayReducer
    }
});