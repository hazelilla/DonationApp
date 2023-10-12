import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { logger } from "redux-logger";
import userSlice from "./reducers/UserSlice";
import categoriesSlice  from "./reducers/CategoriesSlice";
import donationsSlice from "./reducers/DonationsSlice";

const rootReducer = combineReducers({
    user: userSlice,
    categories: categoriesSlice,
    donations: donationsSlice
});

const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1
};

const persistedReducer = persistReducer(configuration, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger);
    }
});

export default store;
export const persistor = persistStore(store);