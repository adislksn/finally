import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import chatReducer from './features/chat';
import formLoginReducer from './features/formLogin';
import formSearchReducer from './features/formSearch';
import formRegisterReducer from './features/formRegister';

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    formLogin: formLoginReducer,
    formSearch: formSearchReducer,
    formRegister: formRegisterReducer,
  },
});
