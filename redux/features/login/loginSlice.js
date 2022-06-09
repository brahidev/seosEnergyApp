import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    password: null,
    error: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        success: (state, action) => {
            const { payload: { user, pass } } =  action
            state.user = user
            state.password = pass
            state.error = false
        },
        error: (state) => {
            state.user = null
            state.password = null
            state.error = true
        }
    }
})

export const { success, error } = loginSlice.actions

export default loginSlice.reducer