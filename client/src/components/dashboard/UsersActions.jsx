import { Box, CircularProgress, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Check, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import useUpdateStatus from "../../hooks/useUpdateStatus";

const UsersActions = ({ params, rowId, setRowId }) => {
  const [success, setSuccess] = useState(false);
  const { loading, updateStatus } = useUpdateStatus();

  const handleSubmit = async () => {
    const { isAdmin, _id } = params.row;
    await updateStatus(isAdmin, _id, setRowId, setSuccess);
  };

  useEffect(() => {
    if (params.id === rowId && success) {
      setSuccess(false);
    }
  }, [rowId]);

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            "&:hover": { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default UsersActions;
