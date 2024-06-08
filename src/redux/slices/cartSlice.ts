import { TCartProduct, TProduct } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: TCartProduct[] = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            return state = [...state, {...action.payload, qty: 1}]
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload)
        },
        increment: (state, action: PayloadAction<number>) => {
            return state.map(item => item.id === action.payload ? {...item, qty: item.qty + 1} : item)
        },
        decrement: (state, action: PayloadAction<number>) => {
            return state.map(item => item.id === action.payload ? {...item, qty: item.qty > 1 ? item.qty - 1 : item.qty} : item)
        }
    }
})

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions