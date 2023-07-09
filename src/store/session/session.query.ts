import {sessionStore} from "./session.store";
import {getSessionDataSource} from "./session.requests";

export class SessionQuery {
  store = sessionStore;

  user$ = getSessionDataSource.data$();
}

export const sessionQuery = new SessionQuery();
