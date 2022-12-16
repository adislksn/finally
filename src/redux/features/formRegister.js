import { createSlice } from '@reduxjs/toolkit';

export const formRegister = createSlice({
  name: 'form-register',
  initialState: {
    form: {
      name: 'Fanesa',
      username: '',
      password: '',
      passwordRepeat: '',
    },
    btn: {
      disabled: true,
      value: 'Sign Up',
    },
  },
  reducers: {
    setForm: (state, action) => {
      const { key, value } = action.payload;
      state.form[key] = value;
    },
  },
});

export const { setForm } = formRegister.actions;
export default formRegister.reducer;
