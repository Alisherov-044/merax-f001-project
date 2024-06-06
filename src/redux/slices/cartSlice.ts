import { TProduct } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: TProduct[] = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            return state = [...state, action.payload]
        },
    }
})

export const { addToCart } = cartSlice.actions