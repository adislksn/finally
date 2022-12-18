import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import formLoginReducer from './features/formLogin';
import formSearchReducer from './features/formSearch';
import formRegisterReducer from './features/formRegister';

export default configureStore({
  reducer: {
    user: userReducer,
    formLogin: formLoginReducer,
    formSearch: formSearchReducer,
    formRegister: formRegisterReducer,
  },
});
