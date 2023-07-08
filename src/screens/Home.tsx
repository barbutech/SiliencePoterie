import {alpha, Button, Stack, Typography} from "@mui/material";
import marlene2 from "../assets/marlene2.jpg";
import marlene3 from "../assets/marlene3.jpg";
import {Colors} from "../constants/Corlors.constant";
import log from "../assets/hands.jpg";
import React from "react";

export const Home = () => {
  return <Stack>
    <Stack>
      <Stack zIndex={1} justifyContent="center" alignItems="center"
             style={{
               height: "100vh",
               backgroundImage: `url(${log})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover"
             }}>
        <Stack borderRadius='5px' p="25px" maxWidth="40%" zIndex={2}
               bgcolor={alpha("#ffffff", 0.6)} spacing={3}>
          <Typography fontSize="16px">{`Apprenez à faire de la poterie de manière simple et fun`} </Typography>
          <Button style={{backgroundColor: "black", color: "white"}}> Prendre rdv</Button>
        </Stack>
      </Stack>
      <Stack direction="row" p="40px" flex={1}>
        <img src={marlene2} height={"700px"}/>
        <Stack flex={1} justifyContent="center" alignItems="center" spacing={5}>
          <Typography fontSize="22px" fontWeight="bold">
            {`Des cours de qualité`}
          </Typography>
          <Typography maxWidth="60%" textAlign="center">
            {`Découvrez des sculptures, fortement inspirée par le travail de Giacometti, alliant art du mouvement et de la fixité inhérente aux matériaux.`}
          </Typography>
          <Button>Prendre rdv</Button>
        </Stack>
      </Stack>
      <Stack bgcolor={Colors.primary} p="40px" direction="row" flex={1}>
        <Stack flex={1} justifyContent="center" alignItems="center">
          <Typography fontSize="22px" fontWeight="bold">
            {`Des cours de qualité`}
          </Typography>
          <Typography maxWidth="60%" textAlign="center">
            {`Découvrez des sculptures, fortement inspirée par le travail de Giacometti, alliant art du mouvement et de la fixité inhérente aux matériaux.`}
          </Typography>
        </Stack>
        <img src={marlene3} height={"700px"}/>
      </Stack>

    </Stack>
  </Stack>
}