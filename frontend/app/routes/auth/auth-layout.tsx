import { useAuth } from "@/provider/auth-context";
import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex flex-col items-center pt-50 min-h-screen">
      <img
        src="/logo.png"
        alt="RG Praveen"
        className="w-80 h-50 mb-4"
      />
     
      <Outlet />
      <footer className="mt-8 text-gray-500 text-sm">
  Developed by RG Praveen © 2026
</footer>
    </div>
  );
};

export default AuthLayout;
