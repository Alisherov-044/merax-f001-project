import { TStateSlice } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TStateSlice = {
    isCartOpen: false
}

export const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        openCart: (state) => {
            state.isCartOpen = true
        },
        closeCart: (state) => {
            state.isCartOpen = false
        }
    }
})

export const { openCart, closeCart } = stateSlice.actions