import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  data: {
    _id: null,
    name: '',
    picture: null,
    gender: 'anonym',
    description: null,
    username: '',
    locations: {
      latitude: 0,
      longitude: 0,
    },
    isOnline: false,
  },
};

export const user = createSlice({
  name: 'user',
  initialState: { ...initialState },
  reducers: {
    // State Control.
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setData: (state, action) => {
      state.data = action.payload;
    },

    resetState: (state) => {
      const { token, data } = { ...initialState };
      state.token = token;
      state.data = data;
    },

    // API Control.
  },
});

export const { setToken, setData, resetState } = user.actions;
export default user.reducer;
