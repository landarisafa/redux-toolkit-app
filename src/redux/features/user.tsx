import { createSlice } from '@reduxjs/toolkit';

export interface TUser {
    nom: string;
    prenom: string;
    email: string;
    address: string;
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {} as TUser
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {} as TUser
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;