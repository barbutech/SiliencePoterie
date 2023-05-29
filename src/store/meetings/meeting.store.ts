import {createStore, withProps} from "@ngneat/elf";
import {withRequestsStatus} from "@ngneat/elf-requests";
import {Meeting} from "./meeting.model";

export const meetingStore = createStore(
  {name: "meetings"},
  withProps<Meeting>({}),
  withRequestsStatus(),
);
