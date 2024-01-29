import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode:"light",
    buffer:false,
}
const slice = createSlice({
    name:"slice",
    initialState,
    reducers:{
        changeMode:(state,{payload})=>{
            state.mode = payload
        },
        toggleBuffer:(state,{payload})=>{
            state.buffer = payload
        }
    }
})
export const {changeMode,toggleBuffer}  = slice.actions;
export default slice.reducer;