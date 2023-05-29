import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../utils/firebase.util";
import {doc, setDoc} from "firebase/firestore";
import {MeetingsEnum} from "../../utils/meetings.enum";
import {MeetingOfTheDay} from "../meetings";

export namespace Firebase {
  export const AuthWithEmail = async (email: string, password: string) => await createUserWithEmailAndPassword(auth, email, password);

  export const CreateDoc = async (id: string, hour: MeetingsEnum, userId: string, meetings?: MeetingOfTheDay) => {
    var newMeeting = meetings
    if (!newMeeting) {
      newMeeting = {morning10: [], after14: [], after16: []}
    }
    if (hour === MeetingsEnum.MORNING10)
      newMeeting[`morning10`].push(userId);
    else if (hour === MeetingsEnum.AFTER14)
      newMeeting[`after14`].push(userId);
    else if (hour === MeetingsEnum.AFTER16)
      newMeeting[`after16`].push(userId);
    await setDoc(doc(db, "meetings", `${id}`), {
      meets: newMeeting
    })
  }
}