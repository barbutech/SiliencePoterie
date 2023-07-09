import {alpha, Box, Button, IconButton, Modal, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {DateCalendar} from '@mui/x-date-pickers';
import log from "../assets/hands.jpg";
import dayjs, {Dayjs} from "dayjs";
import {Firebase} from "../store/common/Firebase";
import {MeetingsEnum} from "../utils/meetings.enum";
import {auth} from "../utils/firebase.util";
import {meetingQuery, meetingService} from "../store/meetings";
import {useObservable} from "@ngneat/react-rxjs";
import {Colors} from "../constants/Corlors.constant";
import {ReactComponent as Close} from "../assets/icon_close.svg";
import {sessionQuery, sessionService, UserInfos} from "../store/session/";

export const Course = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [meets] = useObservable(meetingQuery.meeting$);
  const [user] = useObservable(sessionQuery.user$);
  const userId = auth.currentUser?.uid;
  const [isOpen, setIsopen] = useState(false);
  const [userInfos, setUserInfos] = useState<UserInfos>({});

  const handleClose = () => setIsopen(false);

  function isValidEmail(email?: string) {
    if (!email) return false;
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    sessionService.getSession();
    meetingService.getRealTimeMeeting(date?.format("DD-MM-YYYY"));
  }, [date])

  return <Stack pb="30px">
    <Stack zIndex={1} justifyContent="center" alignItems="center"
           style={{
             height: "100vh",
             backgroundImage: `url(${log})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover"
           }}>
      <Stack borderRadius='5px' p="25px" maxWidth="40%" zIndex={2}
             bgcolor={alpha("#ffffff", 0.6)}>
        <Typography fontSize="16px">{`Vous êtes curieux(se) et souhaitez découvrir la poterie ? N'hésitez plus et foncez prendre un de mes
          cours ! En 2h vous apprendrez les rudiments de la céramique et son maniement`} </Typography>
      </Stack>
    </Stack>
    <Stack direction="row">
      <Stack alignItems="center" justifyContent="center" flex={1} bgcolor={Colors.secondary}>
        <Typography>
          {`Cours de 2h de poterie du lundi au vendredi. 40 euros par séances`}
        </Typography>
      </Stack>
      <Stack px="40px" bgcolor={alpha(Colors.primary, 0.7)}>
        <DateCalendar disablePast value={date} onChange={async (value) => {
          setDate(value)
        }}/>
      </Stack>
    </Stack>
    {date && <Stack direction="row" py="40px" spacing={2} justifyContent="space-evenly">
        <Box border={2} px={10} py={3}>
            <Typography>Cours de poterie de 10h à 12h</Typography>
            <Typography>{`${3 - (meets?.meeting?.morning10?.length ?? 0)} place(s) disponible(s)`}</Typography>
          {(!meets?.meeting?.morning10 || meets?.meeting?.morning10?.length < 3) && <Button onClick={() => {
            if (!userId) {
              return;
            }
            Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.MORNING10, userId, meets?.meeting)
          }}>Prendre rdv</Button>}
        </Box>
        <Box border={2} px={10} py={3}>
            <Typography>Cours de poterie de 14h à 16h</Typography>
            <Typography>{`${3 - (meets?.meeting?.after14?.length ?? 0)} place(s) disponible(s)`}</Typography>
          {(!meets?.meeting?.after14 || meets?.meeting?.after14?.length < 3) && <Button onClick={() => {
            if (!userId) {
              return;
            }
            Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.AFTER14, userId, meets?.meeting)
          }}>Prendre rdv</Button>}
        </Box>
        <Box border={2} px={10} py={3}>
            <Typography>Cours de poterie de 16h à 18h</Typography>
            <Typography>{`${3 - (meets?.meeting?.after16?.length ?? 0)} place(s) disponible(s)`}</Typography>
          {(!meets?.meeting?.after16 || meets?.meeting?.after16?.length < 3) && <Button onClick={() => {
            console.log(user.user)
            if (!!user) {
              alert("erreur, ce compte n'existe pas")
              return;
            }
          }}>Prendre rdv</Button>}
        </Box>
    </Stack>}
    <Modal open={isOpen} onClose={handleClose}
           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Stack width="50%" spacing={2} p="30px" bgcolor="white" justifyContent="center">
        <IconButton aria-label="close" style={{maxWidth: "30px"}} onClick={handleClose}>
          <Close/>
        </IconButton>
        <Stack spacing={2} pb="20px">
          <Typography> Prénom</Typography>
          <TextField placeholder={"Jean"} style={{maxWidth: "35%"}}
                     error={userInfos.firstName === undefined || userInfos.firstName?.length === 0}
                     helperText="Veuillez remplir votre prénom"
                     onChange={(event) => setUserInfos({...userInfos, firstName: event.target.value})}></TextField>
          <Typography> Nom</Typography>
          <TextField placeholder={"Langlerais"} style={{maxWidth: "35%"}}
                     error={userInfos.lastName === undefined || userInfos.lastName?.length === 0}
                     helperText="Veuillez remplir votre nom"
                     onChange={(event) => setUserInfos({...userInfos, lastName: event.target.value})}></TextField>
          {/*<Typography> Numéro de téléphone</Typography>*/}
          {/*<TextField placeholder={"06 06 06 06 06"} style={{maxWidth: "35%"}}*/}
          {/*           onChange={(event) => setUserInfos({...userInfos, lastName: event.target.value})}></TextField>*/}
          <Typography> E-mail</Typography>
          <TextField placeholder={"example@siliencepoterie.com"} error={!isValidEmail(userInfos.email)}
                     helperText={"Format email incorrect"}
                     style={{maxWidth: "35%"}}
                     onChange={(event) => setUserInfos({...userInfos, lastName: event.target.value})}></TextField>
        </Stack>
        <Button
          style={{
            maxWidth: "35px",
            alignSelf: "flex-end",
            backgroundColor: "black"
          }}>Valider</Button>
      </Stack>
    </Modal>
  </Stack>
}
//
// if (!userId) {
//   return;
// }
// Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.AFTER16, userId, meets?.meeting)
