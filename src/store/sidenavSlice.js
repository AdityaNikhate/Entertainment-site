import { createSlice } from "@reduxjs/toolkit";

export const sidenavSlice = createSlice({
  name: 'shownav',
  initialState: {
    nav:true
  },
  reducers:{
    togglenav : (state)=>{
      state.nav = !state.nav;
    }
  }
})

export const {togglenav} = sidenavSlice.actions;

export default sidenavSlice.reducer;