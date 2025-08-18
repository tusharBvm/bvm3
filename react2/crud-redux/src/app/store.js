// import { createStore } from 'redux';
// import crudReducer from '../reducers/crudReducer';

// const store = createStore(crudReducer)

// export default store
// 

import { createStore } from "redux";
import crudReducer from "../reducers/crudReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, crudReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);


export default store;



