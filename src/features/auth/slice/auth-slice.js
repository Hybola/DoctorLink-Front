import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from '../../../api/auth-api'
import { removeToken, setToken } from "../../../utils/localStorage"; 

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const register = createAsyncThunk(
  'auth/register',
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input)
      setToken(res.data.accessToken)
      const resFetchMe = await authService.fetchMe()
      return resFetchMe.data.user ////// Check again
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message)
    }
  }
)

export const login = createAsyncThunk('auth/login', async (input, thunkApi) => {
  try {
    const res = await authService.login(input);
    setToken(res.data.accessToken);
    const resFetchMe = await authService.fetchMe();
    return resFetchMe.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const fetchMe = createAsyncThunk('auth/fetchMe', async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  removeToken();
});



const authSlice = createSlice({
  name: "auth",
  initialState, //บรรทัดนี้เขียนย่อเป็นคำเดียวได้นะ
  extraReducers: (builder) =>
    builder
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      }),
});
export default authSlice.reducer;
