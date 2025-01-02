import React, { useEffect, useState } from "react";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import useGlobal from "../../zustand/useGlobal";
import moment from "moment";
import { grey } from "@mui/material/colors";
import useGetRooms from "../../hooks/useGetRooms";
import RoomsActions from "../../components/dashboard/RoomsActions";
import { IoMdClose } from "react-icons/io";
import Room from "../../components/rooms/Room";
import { useAuthContext } from "../../context/AuthContext";

const Rooms = () => {
  const { authUser } = useAuthContext();
  const { rooms, selectedRoom, setSelectedRoom } = useGlobal();
  const { getRooms } = useGetRooms();
  const [pageSize, setPageSize] = useState(5);
  const [roomsToBeShown, setRoomsToBeShown] = useState([]);

  const column = [
    {
      field: "images",
      headerName: "Photo",
      width: 60,
      renderCell: (params) => (
        <Avatar sx={{ borderRadius: 1 }} src={params.row.images[0]} />
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "price",
      headerName: "Cost",
      width: 100,
      renderCell: (params) => "$" + params.row.price,
    },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      renderCell: (params) =>
        params.row.description.slice(
          0,
          Math.min(100, params.row.description.length)
        ) + "...",
    },
    {
      field: "lng",
      headerName: "Longitude",
      width: 100,
      renderCell: (params) => params.row.lng.toFixed(4),
    },
    {
      field: "lat",
      headerName: "Latitude",
      width: 100,
      renderCell: (params) => params.row.lat.toFixed(4),
    },
    {
      field: "userPhoto",
      headerName: "Added by",
      width: 80,
      renderCell: (params) => (
        <Tooltip title={params.row.userName} arrow>
          <Avatar src={params.row.userPhoto} />
        </Tooltip>
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,
      renderCell: (params) => <RoomsActions params={params} />,
    },
  ];

  useEffect(() => {
    const fetchRooms = async () => {
      await getRooms();
    };

    if (rooms.length === 0) {
      fetchRooms();
    }
  }, []);

  useEffect(() => {
    if (authUser.isAdmin) {
      setRoomsToBeShown(rooms);
    } else {
      const roomsOfTheUser = rooms.filter(
        (room) => authUser.id === room.userId
      );
      setRoomsToBeShown(roomsOfTheUser);
    }
  }, [rooms]);

  return (
    <>
      <div className="flex justify-center">
        <Box sx={{ height: 400, width: "93%" }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center", mt: 3, mb: 3 }}
          >
            Manage Rooms
          </Typography>
          <DataGrid
            columns={column}
            rows={roomsToBeShown}
            getRowId={(row) => row._id}
            rowsPerPageOptions={[5, 10, 20]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            })}
            sx={{
              [`& .${gridClasses.row}`]: {
                bgcolor: grey[200],
              },
            }}
          />
        </Box>
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
    </>
  );
};

export default Rooms;
