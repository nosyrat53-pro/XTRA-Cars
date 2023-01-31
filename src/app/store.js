import { configureStore } from '@reduxjs/toolkit'
import SelectModalReducer from './features/SelectModal';

export const store = configureStore({
  reducer: {
    SelectModal: SelectModalReducer
  },
})