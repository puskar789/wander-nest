import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Cluster from "./components/map/Cluster";
import Rooms from "./components/rooms/Rooms";
import AddRoom from "./components/addRoom/AddRoom";
import { useAuthContext } from "./context/AuthContext";
import Protected from "./components/Protected";
import { IoMdClose } from "react-icons/io";
import Room from "./components/rooms/Room";
import useGlobal from "./zustand/useGlobal";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const { authUser } = useAuthContext();
  const { selectedRoom, setSelectedRoom } = useGlobal();

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
          {currentTab === 2 && authUser && (
            <AddRoom handleTabChange={handleTabChange} />
          )}
          {currentTab === 2 && !authUser && <Protected />}
        </div>
        <BottomNav currentTab={currentTab} handleTabChange={handleTabChange} />
        <Toaster />
      </div>

      <div
        className={`fixed inset-0 bg-white z-50 transition-transform transform ${
          selectedRoom ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionDuration: "300ms" }}
      >
        <button
          onClick={() => setSelectedRoom(null)}
          className="absolute top-2 right-4 p-2 rounded-full"
        >
          <IoMdClose className="text-3xl" />
        </button>
        {selectedRoom && <Room room={selectedRoom} />}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
