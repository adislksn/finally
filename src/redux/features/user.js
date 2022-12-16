import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const user = createSlice({
  name: 'user',
  initialState: { initialState },
  reducers: {
    //
  },
});

// export const { increment, decrement, incrementByAmount } = user.actions;
export default user.reducer;
