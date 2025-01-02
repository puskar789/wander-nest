import { Navigate, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Users from "./pages/dashboard/Users";
import Rooms from "./pages/dashboard/Rooms";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
              authUser?.isAdmin ? (
                <DashboardHome />
              ) : (
                <Navigate to="/dashboard/rooms" />
              )
            }
          />
          <Route
            path="users"
            element={
              authUser?.isAdmin ? <Users /> : <Navigate to="/dashboard/rooms" />
            }
          />
          <Route path="rooms" element={<Rooms />} />
          <Route
            path="*"
            element={
              authUser?.isAdmin ? (
                <DashboardHome />
              ) : (
                <Navigate to="/dashboard/rooms" />
              )
            }
          />
          {/* <Route path="requests" element={<Requests />} />
          <Route path="messages" element={<Messages />} /> */}
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Toaster />
    </PrimeReactProvider>
  );
}

export default App;
