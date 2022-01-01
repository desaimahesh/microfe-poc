import React from 'react'
import { Provider, useSelector, useDispatch} from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: ''
  },
  reducers: {
    logOutSucess: state => {
      state.token = ''
    },
    loginSuccess: (state, action) => {
      state.token = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginSuccess, logOutSucess} = loginSlice.actions

const store = configureStore({
  reducer: {
      login: loginSlice.reducer,
  },
});

export function useStore() {
  const token = useSelector(state => state.login.token);
  const dispatch = useDispatch();
  return {
    token,
    login: (token) => dispatch(loginSuccess(token)),
    logOut: () => dispatch(logOutSucess()),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}