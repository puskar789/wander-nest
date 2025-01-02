import { Tooltip } from "@mui/material";
import React from "react";
import { MdOutlinePreview, MdDelete } from "react-icons/md";
import useDeleteRoom from "../../hooks/useDeleteRoom";
import useGlobal from "../../zustand/useGlobal";

const RoomsActions = ({ params }) => {
  const { deleteRoom } = useDeleteRoom();
  const { setSelectedRoom } = useGlobal();

  const handleRoomDelete = async () => {
    await deleteRoom(params.id);
  };

  return (
    <div className="flex gap-4">
      <Tooltip title="View room details">
        <button
          onClick={() => {
            setSelectedRoom(params.row);
          }}
        >
          <MdOutlinePreview className="text-3xl" />
        </button>
      </Tooltip>
      <Tooltip title="Delete this room">
        <button>
          <MdDelete className="text-3xl" onClick={handleRoomDelete} />
        </button>
      </Tooltip>
    </div>
  );
};

export default RoomsActions;
