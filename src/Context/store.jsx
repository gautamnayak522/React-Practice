import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import { customMiddleware, exampleMiddleware, print1, print2, print3 } from "../middleware/middleware";

export const initialState = {
    Amount: 0
};

const middlewareEnhancer = applyMiddleware(print1,print2,print3,customMiddleware,exampleMiddleware)

export const preloadedState = window.__PRELOADED_STATE__;


export const store = createStore(reducer,preloadedState,middlewareEnhancer)

