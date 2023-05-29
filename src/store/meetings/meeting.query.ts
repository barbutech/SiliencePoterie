import {meetingStore} from "./meeting.store";
import {getMeetingDataSource} from "./meeting.requests";

export class MeetingQuery {
  store = meetingStore;

  meeting$ = getMeetingDataSource.data$();
}

export const meetingQuery = new MeetingQuery();
