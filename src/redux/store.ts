import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cartSlice'
import { stateSlice } from './slices/stateSlice'
import { authSlice } from './slices/authSlice';
import localStorage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ["cart", "auth"],
    blacklist: ["state"]
}

const combinedReducers = combineReducers({
    cart: cartSlice.reducer,
    state: stateSlice.reducer,
    auth: authSlice.reducer
})

const persistedReducers = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
    reducer: persistedReducers
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;