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
import QuickFireChip from "./component/QuickFireChip";

const Register = () => {
  const [employee, setEmployee] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const selectChange = (e: SelectChangeEvent<string>) => {
    console.log("selectChange", e?.target?.value);
    setEmployee(e?.target?.value);
  };

  const QuickFireQuestions = [
    "Do you have any pets as in-house colleagues?",
    "What animal represents you?",
    "What is one thing on the very top of your bucket list?",
    "If you had a million dollars, what would be the first thing you bought?",
    "What's your secret talent?",
    "What's your favorite quote?",
    "What type of music do you prefer?",
    "What's your favorite TV show and why?",
    "Which actor would you want to play you in the movie about your life?",
    "If you could only listen to one song for the rest of your life, what would it be?",
    "You're going sail around the world. What's the name of your boat?",
    "If you were a vegetable, what vegetable would you be and why?",
    "If you were a superhero what would your name be?",
    "If you could meet any historical figure, who would you choose and why?",
    "Which celebrity was your childhood crush?",
    "Spotify or Apple Music?",
    "Would you rather smell with your hands or talk with your feet?",
    "Would you rather have telekinesis (the ability to move things with your mind) or telepathy (the ability to read minds)?",
    "Would you rather be able to run at 100 miles per hour or fly at 10 miles per hour?",
    "What two things do you consider yourself to be very good at?",
    "What's your go-to remote work outfit?",
    "What are you most looking forward to doing when you retire?",
    "If your job could be anything you wanted, what would it be and why?",
    "What was your dream profession growing up?",
    "What's your dream car?",
    "If you had a million dollars, what would be the first thing you bought?",
    "What would your dream house be like?",
    "If you could say one thing to the entire world right now, what would you say?",
    "If I handed you a plane ticket right now to anywhere in the world, where would you go?",
    "The zombie apocalypse is coming. Who are three people you want on your team?",
    "If you had to eat one meal every day for the rest of your life what would it be and why?",
    "If you could go to Mars, would you? Why or why not?",
    "What would be your campaign slogan if you were running for office?",
    "Are you team Android or team Apple?",
    "Would you rather be a detective or a scientist?",
    "Can you play any instruments? If not, what do you wish you could play?",
    "Would you rather have telekinesis (the ability to move things with your mind) or telepathy (the ability to read minds)?",
    "If you mix dirt and water, are you making water dirty or dirt wet?",
    "What is one interesting fact about your high school or college?",
    "Would you rather go back 20 years knowing everything you know now or go ten years into the future with a million dollars in the bank?",
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
    <Grid item width={"100%"} display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
      <Box component={"h1"} pt="40px">
        ICE BREAKERS
      </Box>
      <Box component={"h4"} textAlign="center" paddingBottom={2} display="flex" alignItems="center">
        <RestaurantMenuIcon /> Quick fire questions, keep it rolling <RestaurantMenuIcon />
      </Box>

      <Box display="flex" flexWrap={"wrap"} paddingTop={4} width={"80%"} justifyContent="center">
        {QuickFireQuestions.map((element, index) => {
          return <QuickFireChip key={index} name={index} caption={index} description={element} />;
        })}
      </Box>
    </Grid>
  );
};

export default Register;
