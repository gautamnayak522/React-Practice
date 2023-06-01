import { initialState } from "./store";

export function reducer(state = initialState, action) {
    
    console.log("reducer ->", state, action);

    switch (action.type) {
        case "DEPOSIT":
            return { 
                Amount: state.Amount + parseInt(action.payload)
            };
        case "WITHDRAW":
            return {
                Amount: state.Amount - parseInt(action.payload)
            };
        default:
            return state;
    }

}
