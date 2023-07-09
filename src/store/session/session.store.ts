import {createStore, withProps} from "@ngneat/elf";
import {withRequestsStatus} from "@ngneat/elf-requests";
import {User} from "./session.model";

export const sessionStore = createStore(
  {name: "session"},
  withProps<User>({user: {}}),
  withRequestsStatus(),
);
