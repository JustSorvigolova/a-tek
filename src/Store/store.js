import {applyMiddleware, combineReducers, createStore} from "redux";
import productReducer from "../Reducers/productReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    products_01: productReducer,
    form: formReducer
})
let store =  createStore(rootReducer,applyMiddleware(thunk))


window.store = store;
export default store;