import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload); 
    },
    toggleComplete: (state, action) => {
      const item = state.find((item) => item.id == action.payload);
      if (item) {
        item.completed = !item.completed; 
      }
    }

    
  }
});

export const { addItem, deleteItem, toggleComplete } = listSlice.actions;
export default listSlice.reducer;
