import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
// etape 1 redux englober l'ensembre de notre application avec <Provider> pour acceder au store dans toute l'application 
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";// pour la partie developpement utilitaire sur chrome pour visualiser le store "à déinstaller pour la version de production"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index" 
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = createStore(
    rootReducer, // c'est le combineReducers dans  /reducers/index.js
    //applyMiddleware(thunk)
    composeWithDevTools(applyMiddleware(thunk)) // utilitaire sur chrome
);

store.dispatch(getPosts());
store.dispatch(getUser());

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, 
document.getElementById("root"));
