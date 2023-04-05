import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, { circularProgressClasses, CircularProgressProps } from "@mui/material/CircularProgress";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  borderRadius: 12,
  paddingY: "24px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "red",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 12,
    backgroundColor: "green",
  },
}));

// Inspired by the former Facebook spinners.

export default BorderLinearProgress;
//  function CustomizedProgressBars() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <FacebookCircularProgress />
//       <br />
//       <BorderLinearProgress variant="determinate" value={50} />
//     </Box>
//   );
// }
