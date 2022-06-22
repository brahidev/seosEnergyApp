import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    password: null,
    email: null,
    phone: null,
    error: false
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        success: (state, action) => {
            const { payload: { user, password, email, phone } } = action
            state.user = user
            state.password = password
            state.email = email
            state.phone = phone
            state.error = false
        },
        error: (state) => {
            state.user = null
            state.password = null
            state.email = null
            state.phone = null
            state.error = true
        }
    }
})

export const { success, error } = registerSlice.actions

export default registerSlice.reducer