import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

export default function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("auth", auth);
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/authentication/sign-in" state={{ from: location }} replace />
  );
}

// export default RequireAuth;
