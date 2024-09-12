import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../reducers/EmployeeSlice"; 

export const store = configureStore({
  reducer: {
    employee: employeeReducer, 
  },
});
