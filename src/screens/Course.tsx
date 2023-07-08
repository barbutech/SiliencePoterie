import {alpha, Box, Button, Stack, Typography} from "@mui/material";
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

export interface Meetings {
  morning10: string[];
  after14: string[];
  after16: string[];
}

export const Course = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [meets] = useObservable(meetingQuery.meeting$);
  const userId = auth.currentUser?.uid;

  useEffect(() => {
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
            if (!userId) {
              return;
            }
            Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.AFTER16, userId, meets?.meeting)
          }}>Prendre rdv</Button>}
        </Box>
    </Stack>}
  </Stack>
}