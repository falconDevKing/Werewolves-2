import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import ErrorHandler from "./ErrorHandler";

interface QuickFireChip {
  name: number;
  caption: number;
  description: string;
  bgColor?: string;
  displayText?: string | number;
  icon?: string;
}

const staffList = [
  "Abolade",
  "Amani",
  "Ayomide",

  "Bukola",
  "Chidinma",
  "David",

  "Chika",
  "Glory",
  "Hermann",
  "Ima",

  "Kuorkor",
  "Lauren",
  "Martins",

  "Michelle",
  "Miguel",
  "Mide",
  "Miracle",
  "Austine",
  "Olu",

  "Femi",
  "Kemi",
  "Ojo",
  "Pelumi",
  "Sade",
  "Shedrack",

  "Uchenna",
];

const QuickFireChip = ({ name, caption, description, bgColor = "orange", displayText }: QuickFireChip) => {
  const [display, setDisplay] = useState(true);

  const random = Math.floor(Math.random() * staffList.length);
  const handleDelete = () => {
    Swal.fire({
      title: staffList[random],
      text: description,
      confirmButtonColor: "blue",
      confirmButtonText: "Next Question",
      backdrop: true,
      footer: "Keep it rolling",
    }).then(async (result) => {
      setDisplay(false);
    });
  };

  return (
    <>
      {display && (
        <Box
          display={"flex"}
          flexBasis="16%"
          m="8px"
          border={"1px solid"}
          width="max-content"
          px="16px"
          py="4px"
          borderRadius={"32px"}
          fontSize={"20px"}
          alignItems="center"
          justifyContent={"space-around"}
          sx={{ cursor: "pointer", backgroundColor: bgColor }}
          onClick={handleDelete}
        >
          Question {name + 1}
          <DeleteForeverIcon fontSize="large" />
        </Box>
      )}
    </>
  );
};

export default QuickFireChip;
