import {Button, Stack, TextField, Typography} from "@mui/material";
import {Colors} from "../constants/Corlors.constant";
import {useState} from "react";
import {UserInfos} from "../store/common/User";
import {Firebase} from "../store/common/Firebase";

export const Auth = () => {
  const [userInfos, setUserInfos] = useState<UserInfos>({});

  function checkPassword(str: string) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

  const setPassword = (newPassword?: string) => {
    setUserInfos({...userInfos, password: newPassword});
  }

  function isValidEmail(email?: string) {
    if (!email) return false;
    return /\S+@\S+\.\S+/.test(email);
  }

  const setEmail = (newEmail?: string) => {
    setUserInfos({...userInfos, email: newEmail})
  }

  return <Stack spacing={2} alignItems="center" height="100%" justifyContent="center">
    <Stack spacing={4} p="20px" bgcolor={Colors.primary}>
      <TextField style={{backgroundColor: "white"}} value={userInfos.email || ""}
        // helperText={"Votre email est invalide"}
                 onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
      <TextField style={{backgroundColor: "white"}} value={userInfos.password || ""}
        // helperText={"Votre mot de passe doit contenir au moins 8 lettres, dont un symbole, une majuscule, une minuscule et un nombre"}
                 onChange={(e) => setPassword(e.target.value)} type="password"
                 placeholder="Mot de passe"/>
      <Button onClick={() => {
        if (!isValidEmail(userInfos.email) || userInfos.email === undefined) {
          return
        }
        if (!checkPassword(userInfos.password ?? "") || userInfos.password === undefined) {
          return
        }
        Firebase.AuthWithEmail(userInfos.email, userInfos.password)
      }}>
        <Typography color="black">Se connecter</Typography>
      </Button>
    </Stack>
  </Stack>
}