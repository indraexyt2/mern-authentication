import React, { useEffect } from "react";
import FloatingCircle from "./components/FloatingCircle";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const ProtectedRoute = ({children}) => {
  const { isAuthenticated, user } = useAuthStore();

  if(!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  if(!user.isVerified) {
    return <Navigate to="/verify-email" replace/>;
  }

  return children;
}

const RedirectAuthenticated = ({children}) => {
  const { isAuthenticated, user } = useAuthStore();

  if(isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace/>;
  }

  return children;
}

function App() {

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("isAuthenticated: ", isAuthenticated);
  console.log("user: ", user);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-sky-900 to-indigo-800 flex justify-center items-center relative overflow-hidden">
        <FloatingCircle color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			  <FloatingCircle color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			  <FloatingCircle color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />

          <Route path="/signup" element={
            <RedirectAuthenticated>
              <SignUpPage />
            </RedirectAuthenticated>
          } />

          <Route path="/login" element={
            <RedirectAuthenticated>
              <LoginPage />
            </RedirectAuthenticated>
          } />

          <Route path="/verify-email" element={<EmailVerificationPage />} />

          <Route path="/forgot-password" element={
            <RedirectAuthenticated>
              <ForgotPasswordPage />
            </RedirectAuthenticated>
          } />

          <Route path="/reset-password/:token" element={
            <RedirectAuthenticated>
              <ResetPasswordPage />
            </RedirectAuthenticated>
          } />
        </Routes>

        <Toaster />
    </div>
  )
}

export default App
