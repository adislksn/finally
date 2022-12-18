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
  formBio: {
    btn: {
      disabled: false,
      value: 'Simpan',
    },
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

    setBio: (state, action) => {
      const { key, value } = action.payload;
      state.data[key] = value;
    },

    setBioBtn: (state, { payload }) => {
      const { disabled, value } = payload;
      state.formBio.btn.disabled = disabled;
      state.formBio.btn.value = value;
    },

    setMessage: (state, action) => {
      const { error, success } = action.payload;
      state.message.error = error;
      state.message.success = success;
    },
  },
});

export const {
  setToken, setData, resetState, setBio, setMessage, setBioBtn,
} = user.actions;
export default user.reducer;
