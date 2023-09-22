import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: {count: 0},
    reducers: {
        plusCount: (state, payload)=>{
            state.count += 1
        },
        minusCount: (state, payload)=>{
            state.count -= 1
        },
        resetCount: (state, payload)=>{
            state.count = 0
        }
    }
})

export const {plusCount, minusCount, resetCount} = countSlice.actions
export default countSlice.reducer