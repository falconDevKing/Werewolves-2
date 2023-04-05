import { Box, Button, Grid } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SelectInput from "./component/SelectInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import BugReportIcon from "@mui/icons-material/BugReport";
import axios from "axios";
import SuccessHandler from "./component/SuccessHandler";
import ErrorHandler from "./component/ErrorHandler";
import { LoadingButton } from "@mui/lab";

const Register = () => {
  const [employee, setEmployee] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const selectChange = (e: SelectChangeEvent<string>) => {
    console.log("selectChange", e?.target?.value);
    setEmployee(e?.target?.value);
  };

  const BuildOptions = [
    { name: "Abolade", value: "abolade@fluna.co" },
    { name: "Amani", value: "amani@fluna.co" },
    { name: "Austine", value: "austine@fluna.co" },
    { name: "Ayomide", value: "ayomide@fluna.co" },
    { name: "Emmanuel", value: "emmanuel@fluna.co" },
    { name: "Bukola", value: "bukola@fluna.co" },
    { name: "Chidinma", value: "chidinma@fluna.co" },
    { name: "Chika", value: "chika@fluna.co" },
    { name: "David", value: "david@fluna.co" },
    { name: "Davido", value: "david_ofosu-dorte@fluna.co" },
    { name: "Femi", value: "femi@fluna.co" },
    { name: "Glory", value: "glory@fluna.co" },
    { name: "Hermann", value: "hermann@fluna.co" },
    { name: "Ima", value: "ima@fluna.co" },
    { name: "Koye", value: "koye@fluna.co" },
    { name: "Kuorkor", value: "kuorkor@fluna.co" },
    { name: "Kemi", value: "kemi@fluna.co" },
  ];

  const BusinessOptions = [
    { name: "Lauren", value: "lauren@fluna.co" },
    { name: "Martins", value: "martins@fluna.co" },
    { name: "Meg", value: "meg@fluna.co" },
    { name: "Michelle", value: "michelle@fluna.co" },
    { name: "Miguel", value: "miguel@fluna.co" },
    { name: "Morenike", value: "morenike@fluna.co" },
    { name: "Mide", value: "mide@fluna.co" },
    { name: "Miracle", value: "miracle@fluna.co" },
    { name: "Olu", value: "olu@fluna.co" },
    { name: "Oludunsin", value: "oludunsin@fluna.co" },
    { name: "Ojo", value: "oluwasetemi@fluna.co" },
    { name: "Pelumi", value: "pelumi@fluna.co" },
    { name: "Sade", value: "sade@fluna.co" },
    { name: "Shedrack", value: "Shedrack@fluna.co" },
    { name: "Tomiwa", value: "tomiwa@fluna.co" },
    { name: "Uchenna", value: "uchenna@fluna.co" },
    { name: "Yadel", value: "yadel@fluna.co" },
  ];

  const handleJoin = async () => {
    setLoading(true);
    try {
      const register = await axios.post("/api/register", { email: employee });
      const message = register?.data?.message;
      SuccessHandler({ message });
    } catch (error) {
      ErrorHandler({ message: "Error Registering for session" });
    }
    setLoading(false);
  };

  return (
    <Grid item width={"100%"} display={"flex"} flexDirection="column" justifyContent={"flex-start"} alignItems="center">
      <Box component={"h1"} pt="40px">
        VILLAGE RAMPAGE
      </Box>
      <Box component={"h4"} textAlign="center" paddingBottom={2} display="flex" alignItems="center">
        <RestaurantMenuIcon /> Kill or be Killed <RestaurantMenuIcon />
      </Box>

      <Box py="40px" width={"60%"} display={"flex"} justifyContent="space-between">
        <SelectInput
          name={"employee"}
          value={employee}
          title={"A - K"}
          placeholder={"Build Team (Engineering, Product, Design)"}
          labelId={"employee"}
          options={BuildOptions}
          onChange={(e) => selectChange(e)}
          sx={{ flexBasis: "45%" }}
          icon={BugReportIcon}
        />

        <SelectInput
          name={"employee"}
          value={employee}
          title={"L - Z "}
          placeholder={"Business Team (Operations, Finance, Executives)"}
          labelId={"employee"}
          options={BusinessOptions}
          onChange={(e) => selectChange(e)}
          sx={{ flexBasis: "45%" }}
          icon={PetsIcon}
        />
      </Box>

      <LoadingButton
        loading={loading}
        disabled={loading}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleJoin}
        loadingIndicator={"Registering..."}
      >
        Join Village
      </LoadingButton>
      <Button size="large" sx={{ color: "white" }}></Button>
    </Grid>
  );
};

export default Register;
