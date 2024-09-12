import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for API requests
const API_URL = "http://localhost:8094/api/employee";

// Initial state
const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

// Async actions
export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/add-employee`, employee);
      if (response.status === 201) {
        return response.data; // Return the created employee data
      }
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/update`, employee);
      if (response.status === 200) {
        return response.data; // Return the updated employee data
      }
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/delete/${id}`);
      if (response.status === 204) {
        return id; // Return the deleted employee ID
      }
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      console.log(response.status);
      if (response.status === 200) {
        return response.data; // Return the list of employees
      }
      else{
        console.log(response.status);
      }
      throw new Error(`Unexpected response status: ${response.status}`);
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const findOneEmployee = createAsyncThunk(
  "employee/findOneEmployee",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/find/${id}`);
      if (response.status === 200) {
        return response.data; // Return a single employee
      }
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

// Slice definition
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle createEmployee
      .addCase(createEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content.push(action.payload); // Add the new employee to the list
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Handle fetchEmployee
      .addCase(fetchEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = action.payload; // Set the list of employees
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle findOneEmployee
      .addCase(findOneEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(findOneEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = [action.payload]; // Set the single employee
      })
      .addCase(findOneEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle updateEmployee
      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.content.findIndex((emp) => emp.id === action.payload.id);
        if (index !== -1) {
          state.content[index] = action.payload; // Update the employee
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle deleteEmployee
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = state.content.filter((emp) => emp.id !== action.payload); // Remove the deleted employee
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;
