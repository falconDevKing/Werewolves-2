import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayerChip from "./component/PlayerChip";
import ModeratorChips from "./component/ModeratorChip";
import BorderLinearProgress from "./component/ProgressBar";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Swal from "sweetalert2";
import axios from "axios";
import { GetServerSideProps } from "next";
// const inter = Inter({ subsets: ["latin"] });

type Player = {
  name: string;
  email: string;
  caption: string;
  description: string;
  role: string;
};
type HomeProps = {
  players: Player[];
};

export default function Home({ players }: HomeProps) {
  const [romeo, setRomeo] = useState(true);
  const [juliet, setJuliet] = useState(true);
  const [seer, setSeer] = useState(true);
  const [life, setLife] = useState(true);
  const [life2, setLife2] = useState(true);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const revealRomeo = () => {
    const romeo = players.find((player) => player.role === "Romeo")?.name;
    Swal.fire({
      title: `${romeo} Ascends`,
      text: "I go to be with my love, take care of this world for me",
      icon: "info",
      iconColor: "blue",
      confirmButtonColor: "blue",
      confirmButtonText: "Next Round",
      backdrop: true,
      footer: "Please Save the Land",
    }).then(async (result) => {
      setRomeo(false);
      setJuliet(false);
    });
  };

  const revealJuliet = () => {
    const juliet = players.find((player) => player.role === "Juliet")?.name;
    Swal.fire({
      title: `${juliet} Ascends`,
      text: "I go to be with my love, take care of this world for me",
      icon: "info",
      iconColor: "blue",
      confirmButtonColor: "blue",
      confirmButtonText: "Next Round",
      backdrop: true,
      footer: "Please Save the Land",
    }).then(async (result) => {
      setRomeo(false);
      setJuliet(false);
    });
  };

  const activateSeer = () => {
    setSeer(false);
  };

  const saveALife = () => {
    setLife(false);
  };

  const saveAlife2 = () => {
    setLife2(false);
  };

  return (
    <>
      <Head>
        <title>village Rampage</title>
        <meta name="description" content="A simple app to moderate the werewolves game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container height={"100vh"}>
        <Grid item width={"20%"} display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" borderRight={"4px solid"}>
          <Box component={"h2"} fontStyle="oblique">
            Power Ups
          </Box>
          <Box width="90%" px="32px" py="16px">
            <Box display="flex" flexWrap={"wrap"} flexDirection="column" justifyContent="space-around" alignItems={"flex-end"}>
              {life && <ModeratorChips title="Save a life" bgColor="green" action={saveALife} />}
              {romeo && <ModeratorChips title="Reveal Romeo" bgColor="blue" action={revealRomeo} />}
              {seer && <ModeratorChips title="Activate Seer" bgColor="orange" action={activateSeer} />}
              {juliet && <ModeratorChips title="Reveal Juliet" bgColor="pink" action={revealJuliet} />}
              {life2 && <ModeratorChips title="Save a life" bgColor="green" action={saveAlife2} />}
            </Box>
          </Box>
        </Grid>
        <Grid item width={"80%"} display={"flex"} flexDirection="column" justifyContent={"flex-start"} alignItems="center">
          <Box component={"h1"} pt="40px">
            VILLAGE RAMPAGE
          </Box>
          <Box component={"h4"} textAlign="center" paddingBottom={2} display="flex" alignItems="center">
            <RestaurantMenuIcon /> Kill or be Killed <RestaurantMenuIcon />
          </Box>

          <Box width="90%" px="32px" py="28px">
            <Box component={"h2"} textAlign="center" paddingBottom={2}>
              Active Players
            </Box>

            <BorderLinearProgress variant="determinate" value={50} />
            <Box display="flex" flexWrap={"wrap"} paddingTop={4}>
              {players.map((element, index) => {
                const { name, email, role, caption, description } = element;

                return <PlayerChip key={email} name={name} role={role} caption={caption} description={description} />;
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const playersData = await axios.get("http://localhost:3000/api/fetchPlayers");
  const players = playersData?.data?.data;
  console.log(playersData);
  console.log(players);
  return {
    props: {
      players,
    },
  };
};
