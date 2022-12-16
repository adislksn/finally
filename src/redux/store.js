import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import formRegisterReducer from './features/formRegister';

export default configureStore({
  reducer: {
    user: userReducer,
    formRegister: formRegisterReducer,
  },
});
