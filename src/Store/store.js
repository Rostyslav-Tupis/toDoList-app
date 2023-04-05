import { createStore } from "redux"
import todoReduce from "../Reducer/reducers"

export const initialState = {
    valueText:{
        id: null,
        valueText: "",
    }
}

const store = createStore( todoReduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

export default store;