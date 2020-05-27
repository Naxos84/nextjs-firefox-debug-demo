import { combineReducers, applyMiddleware, createStore } from "redux";
import {
    demoOneReducer,
    demoTwoReducer,
    initialDemoOneState,
    initialDemoTwoState,
} from "./reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers<AppState>({
    demoOne: demoOneReducer,
    demoTwo: demoTwoReducer,
});

export type AppState = {
    demoOne: typeof initialDemoOneState;
    demoTwo: typeof initialDemoTwoState;
};

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const storeMiddleWareEnhancer =
        process.env.NODE_ENV !== "production"
            ? composeWithDevTools(middleWareEnhancer)
            : middleWareEnhancer;

    return createStore(rootReducer, storeMiddleWareEnhancer);
}
