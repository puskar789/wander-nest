import { Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import { useAuthContext } from "./context/AuthContext";

function App() {
  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Toaster />
    </PrimeReactProvider>
  );
}

export default App;
