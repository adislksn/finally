import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const example = createSlice({
  name: 'example',
  initialState: { ...initialState },
  reducers: {
    //
  },
});

// export const { increment, decrement, incrementByAmount } = example.actions;
export default example.reducer;
