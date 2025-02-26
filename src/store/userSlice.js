import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch users from API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://randomuser.me/api/?results=18");
  const data = await response.json();
  return data.results;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    filteredUsers: [],
    genderFilter: "all",
    loading: false,
    error: null,
    selectedUser: null, 
  },
  reducers: {
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
      if (action.payload === "all") {
        state.filteredUsers = state.users;
      } else {
        state.filteredUsers = state.users.filter(
          (user) => user.gender === action.payload
        );
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.login.uuid !== action.payload);
      state.filteredUsers = state.filteredUsers.filter(
        (user) => user.login.uuid !== action.payload
      );
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
      const { uuid, name, email, gender } = action.payload;
      state.users = state.users.map((user) =>
        user.login.uuid === uuid ? { ...user, name, email, gender } : user
      );
      state.filteredUsers = state.filteredUsers.map((user) =>
        user.login.uuid === uuid ? { ...user, name, email, gender } : user
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setGenderFilter, deleteUser, selectUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
