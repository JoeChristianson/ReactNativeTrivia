import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type State = {
    email:null|string
    userId:null|string
    jwt:null|string
    status:string
    error?:null|string
}

const initialState:State = {
  email: null,
  userId: null,
  jwt: null,
  status: 'idle',
  error: null
};

interface registerParams {
  email:string
  username:string
  password:string
  confirmPassword:string
}

export const register = createAsyncThunk(
  'auth/register',
  async (userData:registerParams) => {
    const response = await fetch('http://localhost:3005/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
  }
);

interface CredentialsParams {
  email:string
  password:string
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials:CredentialsParams) => {
    const response = await fetch('http://localhost:3005/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action:any) => {
        console.log("working")
        state.status = 'fulfilled';
        state.email = action.payload.email;
        state.userId = action.payload.userId;
        state.jwt = action.payload.jwt;
      })
      .addCase(register.rejected, (state, action) => {
        console.log("not working")
        state.status = 'rejected';
        state.error = action.error.message;
        console.log(state.error)
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.email = action.payload.email;
        state.userId = action.payload.userId;
        state.jwt = action.payload.jwt;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});


export default authSlice.reducer;
