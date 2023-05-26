import {AppBar, Avatar, Button, Stack, Toolbar, Typography} from "@mui/material";
import React from "react";
import logo from "../assets/logoSilience.jpg";
import {useNavigate} from "react-router-dom";
import {Colors} from "../utils/Corlors.constant";

export const NavBar = () => {
  const navigate = useNavigate();
  return <AppBar>
    <Toolbar style={{backgroundColor: Colors.primary}}>
      <Stack flex={1} pl="15px" alignItems="center" py="10px" direction="row"
             justifyContent="space-between">
        <Avatar style={{height: 110, width: 110}} src={logo}/>
        <Stack direction="row" justifyContent="flex-end" pr="90px" spacing={8}>
          <Button>
            <Typography color="black"> Home</Typography>
          </Button>
          <Button>
            <Typography color="black"> About me</Typography>
          </Button>
          <Button onClick={() => navigate("cours")}>
            <Typography color="black"> Cours </Typography>
          </Button>
          <Button>
            <Typography color="black"> Me contacter</Typography>
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  </AppBar>
}
