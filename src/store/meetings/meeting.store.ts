import {createStore, withProps} from "@ngneat/elf";
import {withRequestsStatus} from "@ngneat/elf-requests";
import {Meeting} from "./meeting.model";

export const meetingStore = createStore(
  {name: "meetings"},
  withProps<Meeting>({currentMeeting: {morning10: [], after14: [], after16: []}}),
  withRequestsStatus(),
);
