import axios from "axios";

const API_URL="http://localhost:8094/api/employee";

export const createEmployee=(employee)=>{
    return axios.post(API_URL+"/add-employee",employee)
}

export const getAllEmployees=()=>{
    return axios.get(API_URL+"/all")
}

export const findEmployeeById=(id)=>{
    return axios.get(API_URL+`/find/${id}`)
}

export const deleteEmpByid=(id)=>{
    return axios.delete(API_URL+`/delete/${id}`)
}

export const updateEmployee=(employee)=>{
    return axios.put(API_URL+`/update`,employee)
}