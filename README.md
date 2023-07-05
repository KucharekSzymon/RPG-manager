# Vue RPG Game Planning App (Frontend)

This is the frontend repository of the Vue RPG Game Planning App, which is designed to work with the backend server developed in NestJS. The app provides a user interface for planning paper RPG games and utilizes the REST API provided by the backend server.

## Installation

To run the frontend locally, follow these steps:

1. Clone the project repository:
```bash
git clone https://github.com/KucharekSzymon/RPG-manager.git
```
2. Navigate to the project directory:
```bash
cd RPG-manager
```
3. Install the project dependencies:
```bash
npm install
```

4. Configure the backend server URL:
Open the `src/api/index.js` file and locate the `baseURL` constant. Set its value to the URL where your backend server is running, for example:
```javascript
const baseURL = 'http://localhost:3000'; // Replace with your backend server URL
```
## Usage
To start the frontend development server, use the following command:
```bash
npm run serve
```
The app will be accessible at http://localhost:8080 in your web browser.

## Features

- User registration and authentication with JWT
- Full CRUD (Create, Read, Update, Delete) operations for RPG game planning
- Interactive user interface for managing game-related data
- Integration with the backend server using REST API endpoints

## API Reference

### User Registration

Allows registering a new user.

- **Endpoint:** `POST /auth/signup`

#### Parameters

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| name      | string | Required. Must be unique     |
| email     | string | Required. Must be unique     |
| password  | string | Required. Must be unique     |

#### Response

Upon successful registration, the authenticated user information is returned.

- **Endpoint:** `GET /users/me`

#### Parameters

| Parameter     | Type     | Description                |
| ------------- | -------- | -------------------------- |
| Authorization | string   | Required. Contains JWT Token|

## Authors

- [@KucharekSzymon](https://github.com/KucharekSzymon)
- [@Opyd](https://github.com/Opyd)
