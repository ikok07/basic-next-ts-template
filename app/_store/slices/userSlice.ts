import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserState = {
    id: number | null,
    name: string
}

const initialState: UserState = {
    id: null,
    name: ""
}

const userSlice = createSlice({
    name: "user",
    reducerPath: "user",
    initialState,
    reducers: {
        setId(state, action: PayloadAction<number>) {
            state.id = action.payload;
        },
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        }
    }
})

export const userReducer = userSlice.reducer;

export const {
    setId,
    setName
} = userSlice.actions
