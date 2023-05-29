import {from, map, Observable, tap} from "rxjs";
import {meetingStore} from "./meeting.store";
import {Meeting} from "./meeting.model";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../utils/firebase.util";
import {getMeetingDataSource} from "./meeting.requests";

export class MeetingService {
  store = meetingStore;

  resetStore = () => this.store.reset();

  getMeeting = (id?: string): Observable<Meeting> => {
    const docRef = doc(db, "meetings", `${id}`);
    return from(getDoc(docRef)).pipe(map((test) => {
        const data = test.data();
        return data?.meets;
      }), tap((docu) => {
        this.store.update((state) => ({
            ...state,
            currentMeeting: docu
          }),
          getMeetingDataSource.setSuccess()
        )
      }),
      getMeetingDataSource.trackRequestStatus()
    );

  };
}

export const meetingService = new MeetingService();
