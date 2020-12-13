import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ContentReducer } from "./content-reducer";
import thunkMiddleWare from "redux-thunk"
import { CartReducer } from './cart-reducer';

let reducers = combineReducers({
    content: ContentReducer,
    cart: CartReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)));
export default store;