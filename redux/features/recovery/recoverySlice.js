import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    error: false   
}

export const recoverySlice = createSlice({
    name: 'recovery',
    initialState,
    reducers: {
        success: (state, action) => {
            const { payload: email } = action
            state.email = email
            state.error = false
        },
        error: (state) => {
            state.email = null
            state.error = true
        }
    }
})

export const { success, error } = recoverySlice.actions
export default recoverySlice.reducer