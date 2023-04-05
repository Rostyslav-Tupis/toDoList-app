import { initialState } from "../Store/store"

const todoReduce = (state = initialState , action) =>{
    switch (action.type){

        case "ADD_TODO":
            return{
                ...state,
                valueText: action.payload.valueText,
            }

        case "DELET_TODO":
            return{
                ...state,
                id:null,
                valueText: "",
            }

        default:
            return state;
    };
}

export default todoReduce;