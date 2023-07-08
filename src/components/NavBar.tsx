import {AppBar, Avatar, Button, Stack, Toolbar, Typography} from "@mui/material";
import React from "react";
import logo from "../assets/logoSilience.jpg";
import {useNavigate} from "react-router-dom";
import {Colors} from "../constants/Corlors.constant";

export const NavBar = () => {
  const navigate = useNavigate();
  return <AppBar>
    <Toolbar style={{backgroundColor: Colors.primary}}>
      <Stack flex={1} pl="15px" alignItems="center" py="10px" direction="row"
             justifyContent="space-between">
        <Avatar style={{height: 90, width: 90}} src={logo}/>
        <Stack direction="row" justifyContent="flex-end" pr="90px" spacing={8}>
          <Button>
            <Typography color="black" onClick={() => navigate("home")}> Accueil</Typography>
          </Button>
          <Button>
            <Typography color="black" onClick={() => navigate("about")}> À propos</Typography>
          </Button>
          <Button onClick={() => navigate("cours")}>
            <Typography color="black"> Cours </Typography>
          </Button>
          <Button onClick={() => navigate("galerie")}>
            <Typography color="black"> Galerie </Typography>
          </Button>
          <Button>
            <Typography color="black"> Me contacter</Typography>
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  </AppBar>
}
