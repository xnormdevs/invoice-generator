import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import itemsSlice from "./slices/ItemsSlice";
import colorSlice from "./slices/ColorSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  items: itemsSlice,
  colors: colorSlice,
  // Add other reducers here if you have more
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // Add any middleware here if you need it
});

const persistor = persistStore(store);

export { store, persistor };
