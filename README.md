# Role-Based Access Control (RBAC) Backend

A secure Node.js and Express-based backend implementing **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)**. This project demonstrates core security principles with proper access management for different user roles.

---

## Features

- **Authentication**:
  - User registration and login with password hashing using `bcrypt`.
  - Token-based authentication using JSON Web Tokens (JWT).

- **Authorization**:
  - Role-based access control (RBAC) to restrict access to protected routes.
  - Flexible role management (e.g., Admin, User, Moderator).

- **Security**:
  - Secure password storage with `bcrypt`.
  - Token blacklisting for secure logout.
  - Refresh tokens for session renewal.

- **Logging**:
  - Middleware for logging requests and user actions.
  - Auto-created `/logs/access.log` file for auditing.

---


## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Install dependencies:
npm install express mongoose bcryptjs jsonwebtoken dotenv helmet cors

Create an .env file in the root directory with credentials\
npm run dev\
Open the application on http://localhost:3000

## Endpoints

### Authentication
* **Register a new user:** POST /auth/register
* **Login and get tokens:** POST /auth/login
* **Logout:** POST /auth/logout
* **Refresh access token:** POST /auth/refresh-token

### Admin
* **Update user role:** PATCH /admin/update-role

### User
* **Get user profile:** GET /user/

## Role-Based Access Control (RBAC)

**Default Roles:**

* **Admin:**
  - Full access to all routes and actions
  - Can manage other users' roles
* **User:**
  - Limited access to specific resources
  - Cannot perform administrative tasks
* **Moderator (optional):**
  - Can manage content but not user roles

**How RBAC Works:**
Middleware checks the user's role and permissions before granting access to routes. Permissions are stored as part of the user's role field in the database.

## Security Features

* **Password Hashing:** User passwords are hashed using bcrypt before storage.
* **JWT Authentication:**
  - Access tokens with short validity
  - Refresh tokens for reauthentication
  - Token blacklisting for secure logout
* **Environment Variables:** Secrets and sensitive data are stored in the `.env` file.
* **Logging and Auditing:** Logs all user actions in `/logs/access.log`

## Contributors
Atharva Khodke\
LinkedIn: https://www.linkedin.com/in/atharvakhodke/
