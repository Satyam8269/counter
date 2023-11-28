import {legacy_createStore as createStore, compose,applyMiddleware} from "redux";
import { reducer } from "./reducer";


const middleWare1 = (store)=>(next)=>(action)=>{
    next(action);
}

const middleWare2 = (store)=>(next)=>(action)=>{
    action.payload=5
    next(action);
}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const middleWares = [middleWare1,middleWare2];

const enhancer = composeEnhancers(
    applyMiddleware(...middleWares),
    // other store enhancers if any
  );

export const store = createStore(reducer,enhancer)



