import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import fetchingReducer from "../Reducers/fetching";
import songsReducer from "../Reducers/songs";
import selectsongReducer from "../Reducers/selectsong";

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
  },
};

const bigReducer = combineReducers({
  songs: songsReducer,
  fetching: fetchingReducer,
  selectedSong: selectsongReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
