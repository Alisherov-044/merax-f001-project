import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cartSlice'
import { stateSlice } from './slices/stateSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        state: stateSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;