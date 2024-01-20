import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios"

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('/auth/login', params)
    return data
})
const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
        state.data = null
        state.status = 'loaded'
    }
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = 'error';
      state.data = null;
    },
  },
});
export const selectorIsAuth = (state, ) => Boolean(state.auth.data)

export const { logout } = authSlice.actions

export const authReducer = authSlice.reducer
