import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    //
  },
});

// export const { increment, decrement, incrementByAmount } = user.actions;
export default user.reducer;
