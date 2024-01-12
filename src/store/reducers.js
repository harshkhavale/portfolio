import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode:"light"
}
const slice = createSlice({
    name:"slice",
    initialState,
    reducers:{
        changeMode:(state,{payload})=>{
            state.mode = payload
        }
    }
})
export const {changeMode}  = slice.actions;
export default slice.reducer;