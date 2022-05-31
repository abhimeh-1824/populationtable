import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from '@redux-devtools/extension';
import {populationReducer} from "./redux/reducer"

const middleware = [thunk]
const rootReducer = combineReducers({
    populationReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store