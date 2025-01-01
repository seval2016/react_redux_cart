import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './modalSlice';
import { dataSlice } from './dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,  // .reducer eklenmeli
    modal: modalSlice.reducer,  // .reducer eklenmeli
  },
});
