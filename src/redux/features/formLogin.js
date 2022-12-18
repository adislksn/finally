import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    username: '',
    password: '',
  },
  btn: {
    disabled: false,
    value: 'Login',
  },
  message: {
    error: '',
    success: '',
  },
};

export const formLogin = createSlice({
  name: 'form-login',
  initialState: { ...initialState },
  reducers: {
    // State Control.
    setForm: (state, action) => {
      const { key, value } = action.payload;
      state.form[key] = value;
    },

    setBtn: (state, action) => {
      const { disabled, value } = action.payload;
      state.btn.disabled = disabled;
      state.btn.value = value;
    },

    setMessage: (state, action) => {
      const { error, success } = action.payload;
      state.message.error = error;
      state.message.success = success;
    },

    resetState: (state) => {
      const { form, btn, message } = { ...initialState };
      state.form = form;
      state.btn = btn;
      state.message = message;
    },

    // API Control.
  },
});

export const {
  setForm, setBtn, setMessage, resetState,
} = formLogin.actions;
export default formLogin.reducer;
