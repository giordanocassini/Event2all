import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./modules/users";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit"

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
  userReduce,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
