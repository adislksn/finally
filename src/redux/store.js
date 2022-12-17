import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import formLoginReducer from './features/formLogin';
import formRegisterReducer from './features/formRegister';

export default configureStore({
  reducer: {
    user: userReducer,
    formLogin: formLoginReducer,
    formRegister: formRegisterReducer,
  },
});
