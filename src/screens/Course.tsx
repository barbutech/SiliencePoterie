import {alpha, Box, Container, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {StaticDatePicker} from '@mui/x-date-pickers';
import log from "../assets/hands.jpg";

export const Course = () => {
  const [date, setDate] = useState<Date | null>();
  return <Stack pb="30px">
    <Stack zIndex={1} justifyContent="center" alignItems="center"
           style={{
             height: "100vh",
             backgroundImage: `url(${log})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover"
           }}>
      <Stack p="15px" maxWidth="40%" zIndex={2}
             bgcolor={alpha("#ffffff", 0.4)}>
        <Typography>{`Vous êtes curieux(se) et souhaitez découvrir la poterie ? N'hésitez plus et foncez prendre un de mes
          cours ! En 2h vous apprendrez les rudiments de la céramique et son maniement`} </Typography>
      </Stack>
    </Stack>
    <Container style={{paddingTop: "80px", height: "85vh"}}>
      <Box border={2}>
        <StaticDatePicker orientation="landscape"/>
      </Box>
    </Container>
  </Stack>
}