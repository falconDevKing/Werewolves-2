import { Box, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import { title } from "process";

interface ModeratorChips {
  title: string;
  bgColor: string;
  action: () => void;
}

const ModeratorChips = ({ title, action, bgColor = "orange" }: ModeratorChips) => {
  return (
    <Box
      display="flex"
      m="8px"
      border={"1px solid"}
      minWidth="max-content"
      px="16px"
      py="4px"
      borderRadius={" 32px 0 0 12px "}
      fontSize={"24px"}
      alignItems="center"
      justifyContent={"space-around"}
      sx={{ cursor: "pointer", backgroundColor: bgColor, color: bgColor === "green" ? "white" : "" }}
      onClick={action}
    >
      {title}
      <DeleteForeverIcon fontSize="large" />
    </Box>
  );
};

export default ModeratorChips;
