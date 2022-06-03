import { createStore, combineReducers } from "redux";
import { loadState, saveState } from "./sessionStorage";
import { authReducer } from "./authentication";
import { drawerReducer } from "./handleDrawer";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
    user : authReducer,
    drawer : drawerReducer
});

const persistedState = loadState();
export const store = createStore(reducer, persistedState, reduxDevtools);

store.subscribe(()=>{
    saveState(store.getState())
})
