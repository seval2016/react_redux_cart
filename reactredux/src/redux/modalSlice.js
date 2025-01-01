import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal:false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
   
  
  },
})

// Action creators are generated for each case reducer function
export const {} = modalSlice.actions

export default modalSlice.reducer