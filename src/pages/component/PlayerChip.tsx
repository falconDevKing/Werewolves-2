import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import ErrorHandler from "./ErrorHandler";

interface PlayerChip {
  name: string;
  role: string;
  caption: string;
  description: string;
  bgColor?: string;
  displayText?: string | number;
  icon?: string;
}

const PlayerChip = ({ name, role, caption, description, bgColor = "orange", displayText }: PlayerChip) => {
  const [display, setDisplay] = useState(true);

  const icon = role === "Doctor" ? "question" : role === "Wolf" ? "success" : "error";

  const handleDelete = () => {
    Swal.fire({
      title: caption,
      text: description,
      icon: icon,
      iconColor: role === "Wolf" ? "green" : "red",
      confirmButtonColor: "blue",
      confirmButtonText: "Next Round",
      backdrop: true,
      footer: "Please Save the Land",
    }).then(async (result) => {
      if (role === "Romeo") {
        ErrorHandler({ message: "Where is my Juliet?" });
      }
      if (role === "Juliet") {
        ErrorHandler({ message: "Where is my Romeo?" });
      }
      setDisplay(false);
    });
  };

  return (
    <>
      {display && (
        <Box
          display={"flex"}
          m="8px"
          border={"1px solid"}
          width="max-content"
          px="16px"
          py="4px"
          borderRadius={"32px"}
          fontSize={"24px"}
          alignItems="center"
          justifyContent={"space-around"}
          sx={{ cursor: "pointer", backgroundColor: bgColor }}
          onClick={handleDelete}
        >
          {name}
          <DeleteForeverIcon fontSize="large" />
        </Box>
      )}
    </>
  );
};

export default PlayerChip;
