The **MERN Authentication** project is a user authentication system built with the **MERN stack** (MongoDB, Express, React, Node.js) using **JSON Web Token (JWT)** to securely manage user authentication.

## Features
- User registration
- User login
- Token-based authentication using JWT
- User logout
- Route protection middleware
- Password reset with **Mailtrap**
- Secure API with token implementation

## Technologies Used
- **Backend**: Node.js, Express.js, Mongoose
- **Frontend**: React.js, TailwindCss, Framer Motion
- **Database**: MongoDB
- **Security**:
  - JSON Web Token (JWT)
  - bcryptjs for password hashing
- **Email**: Nodemailer and Mailtrap for email services

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/indraexyt2/mern-authentication.git
cd mern-authentication
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add the following environment variables. Replace the placeholder values with your own:

```env
# MongoDB connection string
MONGO_URI=your_mongo_connection_string

# Server settings
PORT=5000
NODE_ENV=development

# JWT secret key
JWT_SECRET=your_jwt_secret

# Mailtrap settings for email service
MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=your_mailtrap_endpoint

# Client URL
CLIENT_URL=http://localhost:5173
```

### 3. Backend Setup
Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

Start the backend server:
```bash
npm run dev
```

### 4. Frontend Setup
Navigate to the `frontend` folder and install dependencies:
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 5. Access the Application
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
