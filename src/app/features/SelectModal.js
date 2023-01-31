import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const SelectModalReducer = createSlice({
  name: 'selectModal',
  initialState,
  reducers: {
    openModal: (state) => {
        state.isOpen = true;
    },
    closeModal: (state) => {
        state.isOpen = false
    }
  },
})

export const { openModal , closeModal} = SelectModalReducer.actions

export default SelectModalReducer.reducer