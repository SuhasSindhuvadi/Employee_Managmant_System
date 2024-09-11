# Employee Service Frontend

This project is a simple Employee Management System frontend built with React. It utilizes Axios for HTTP requests, React Router DOM for navigation, and Bootstrap for styling. The backend is a Spring Boot REST API running on port 8094.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Backend Setup](#backend-setup)
7. [Usage](#usage)
8. [Project Structure](#project-structure)

## Features
- **View Employees:** List all employees.
- **Add Employee:** Add a new employee.
- **Update Employee:** Find and update employee details.
- **Delete Employee:** Delete an employee.

## Technologies Used
- **Frontend:**
  - React
  - Axios
  - React Router DOM
  - Bootstrap
- **Backend:**
  - Spring Boot REST API
  - Java

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Java Development Kit (JDK 11 or higher)
- Maven (for backend setup)

## Installation

### Frontend Setup
1. Clone the repository:

   git clone https://github.com/your-username/employee-service-frontend.git
   cd employee-service-frontend

2. Install dependencies:
  
   npm install


### Backend Setup
1. Clone the backend repository:

   git clone https://github.com/your-username/employee-service-backend.git
   cd employee-service-backend

2. Build the backend project:

   mvn clean install
  

## Running the Application

### Start the Backend Server
Run the Spring Boot application on port **8094**:

mvn spring-boot:run


### Start the Frontend Application
1. Ensure the backend server is running.
2. Run the React application:
   npm start
4. Open your browser and navigate to `http://localhost:3000`.

## Backend Setup
- The backend is a Spring Boot REST API running on port **8094**.
- Ensure you have configured your application properties correctly to run on port 8094.
- Sample API endpoints:
  - `GET /api/employee/all` - Fetch all employees.
  - `POST /api/employee` - Add a new employee.
  - `PUT /api/employee/{id}` - Update an existing employee.
  - `DELETE /api/employee/{id}` - Delete an employee.

## Usage

- **Home**: The homepage of the application.
- **View Employees**: Displays a list of all employees fetched from the backend.
- **Add Employee**: Allows you to add a new employee.
- **Find/Update Employee**: Allows you to search for an employee by ID and update their details.
- **Delete Employee**: Allows you to delete an employee by ID.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.
