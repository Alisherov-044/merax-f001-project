import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    access_token: null,
    refresh_token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            return state = {...state, ...action.payload}
        }
    }
})

export const { setAuth } = authSlice.actions