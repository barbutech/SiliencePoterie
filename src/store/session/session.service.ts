import {from, map, Observable, tap} from "rxjs";
import {sessionStore} from "./session.store";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../utils/firebase.util";
import {User} from "./session.model";
import {getSessionDataSource} from "./session.requests";

export class SessionService {
  store = sessionStore;

  resetStore = () => this.store.reset();

  getSession = (id?: string): Observable<User> => {
    const docRef = doc(db, "users", `${id}`);

    return from(getDoc(docRef)).pipe(map((test) => {
        const data = test.data();
        return data?.user;
      }), tap((docu) => {
        this.store.update((state) => ({
            ...state,
            currentMeeting: docu
          }),
          getSessionDataSource.setSuccess()
        )
      }),
      getSessionDataSource.trackRequestStatus()
    );
  };
}

export const sessionService = new SessionService();
