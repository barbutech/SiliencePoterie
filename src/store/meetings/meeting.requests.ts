import {createRequestDataSource} from "@ngneat/elf-requests";
import {meetingStore} from "./meeting.store";
import {select} from "@ngneat/elf";

export const getMeetingDataSource = createRequestDataSource({
  store: meetingStore,
  data$: () => meetingStore.pipe(select((state) => state.currentMeeting)),
  requestKey: "getMeetings",
  dataKey: "meeting",
});
