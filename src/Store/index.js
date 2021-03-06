import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import fetchingReducer from "../Reducers/fetching";
import songsReducer from "../Reducers/songs";
import selectsongReducer from "../Reducers/selectsong";
import infoReducer from "../Reducers/info";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  songs: {
    list: [],
  },
  fetching: {
    loading: true,
  },
  selectedSong: {
    songId: "",
    favorites: [],
  },
  info: {
    infolist: [],
  },
};

const bigReducer = combineReducers({
  songs: songsReducer,
  fetching: fetchingReducer,
  selectedSong: selectsongReducer,
  info: infoReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
