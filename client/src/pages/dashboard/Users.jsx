import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import useGlobal from "../../zustand/useGlobal";
import useGetUsers from "../../hooks/useGetUsers";
import moment from "moment";
import { grey } from "@mui/material/colors";
import UsersActions from "../../components/dashboard/UsersActions";

const Users = () => {
  const { users } = useGlobal();
  const { getUsers } = useGetUsers();
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);

  // an array of objects, where each object represents a field
  const column = [
    {
      field: "photoURL",
      headerName: "Avatar",
      width: 60,
      renderCell: (params) => <Avatar src={params.row.photoURL} />,
      sortable: false,
      filterable: false,
    },
    { field: "name", headerName: "Name", width: 170 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 100,
      type: "boolean",
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    { field: "_id", headerName: "id", width: 220 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      renderCell: (params) => (
        <UsersActions params={params} rowId={rowId} setRowId={setRowId} />
      ),
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers();
    };

    if (users.length === 0) {
      fetchUsers();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <Box sx={{ height: 400, width: "76%" }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 3, mb: 3 }}
        >
          Manage Users
        </Typography>
        <DataGrid
          columns={column}
          rows={users}
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
          onCellEditStop={(params) => {
            console.log(params.id);
            setRowId(params.id);
          }}
        />
      </Box>
    </div>
  );
};

export default Users;
