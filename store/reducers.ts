import { Action } from "redux";

export const initialDemoOneState = {
    value: "",
};

export const demoOneReducer = (
    state = initialDemoOneState,
    action: Action<any>
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const initialDemoTwoState = {
    otherValue: null,
};

export const demoTwoReducer = (state = initialDemoTwoState, action: any) => {
    switch (action.type) {
        case "MyAction":
            return {
                ...state,
                otherValue: action.value,
            };
        default:
            return state;
    }
};
