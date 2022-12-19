import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friend: {
    _id: null,
    name: '-',
    picture: null,
    description: '',
    message: '',
  },
  sendRequest: {
    form: {
      message: '',
    },
    btn: {
      disabled: false,
      value: 'Kirim',
    },
  },
  chat: {
    _id: null,
    users: {},
    contents: [],
  },
};

export const chat = createSlice({
  name: 'chat',
  initialState: { ...initialState },
  reducers: {
    setFriend: (state, { payload }) => {
      state.friend = payload;
    },

    setSendRequestMessage: (state, { payload }) => {
      state.sendRequest.form.message = payload;
    },
    setSendRequestBtn: (state, { payload }) => {
      const { disabled, value } = payload;
      state.sendRequest.btn.disabled = disabled;
      state.sendRequest.btn.value = value;
    },
  },
});

export const { setFriend, setSendRequestMessage, setSendRequestBtn } = chat.actions;
export default chat.reducer;
