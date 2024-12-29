import { Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import { useAuthContext } from "./context/AuthContext";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Users from "./pages/dashboard/Users";
import Rooms from "./pages/dashboard/Rooms";
import Requests from "./pages/dashboard/Requests";
import Messages from "./pages/dashboard/Messages";

function App() {
  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="requests" element={<Requests />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Toaster />
    </PrimeReactProvider>
  );
}

export default App;
