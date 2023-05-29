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
    meetingService.getMeeting(date?.format("DD-MM-YYYY")).subscribe();
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
    <DateCalendar disablePast value={date} onChange={async (value) => {
      setDate(value)
      // setMeets(await Firebase.GetNumberOfDocs(dayjs(value?.toDate()).format("DD-MM-YYYY")))
    }}/>
    {date && <Stack spacing={2} alignItems="center">
        <Box border={2} p={12}>
            <Typography>10-12</Typography>
            <Typography>{`${3 - (meets?.meeting?.morning10?.length ?? 0)} place(s) disponible(s)`}</Typography>
          {(!meets?.meeting?.morning10 || meets?.meeting?.morning10?.length < 3) && <Button onClick={() => {
            if (!userId) {
              return;
            }
            Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.MORNING10, userId, meets?.meeting)
          }}>Prendre rdv</Button>}
        </Box>
        <Box border={2} p={12}>
            <Typography>14-16</Typography>
            <Typography>{`${3 - (meets?.meeting?.after14?.length ?? 0)} place(s) disponible(s)`}</Typography>
          {(!meets?.meeting?.after14 || meets?.meeting?.after14?.length <= 3) && <Button onClick={() => {
            if (!userId) {
              return;
            }
            Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.AFTER14, userId, meets?.meeting)
          }}>Prendre rdv</Button>}
        </Box>
        <Box border={2} p={12}>
            <Typography>16-18</Typography>
            <Typography>{`${3 - (meets?.meeting?.after16?.length ?? 0)} place(s) disponible(s)`}</Typography>
          {(!meets?.meeting?.after16 || meets?.meeting?.after16?.length <= 3) && <Button onClick={() => {
            if (!userId) {
              return;
            }
            Firebase.CreateDoc(dayjs(date?.toDate()).format("DD-MM-YYYY"), MeetingsEnum.AFTER16, userId, meets?.meeting)
          }}>Prendre rdv</Button>}
        </Box>
    </Stack>}
  </Stack>
}