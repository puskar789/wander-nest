import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Cluster from "./components/map/Cluster";
import Rooms from "./components/rooms/Rooms";
import AddRoom from "./components/addRoom/AddRoom";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <PrimeReactProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="bg-white flex-1 flex justify-center">
          {currentTab === 0 && <Cluster />}
          {currentTab === 1 && <Rooms />}
          {currentTab === 2 && <AddRoom />}
        </div>
        <BottomNav currentTab={currentTab} handleTabChange={handleTabChange} />
        <Toaster />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
