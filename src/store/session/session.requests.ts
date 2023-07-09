import {createRequestDataSource} from "@ngneat/elf-requests";
import {sessionStore} from "./session.store";
import {select} from "@ngneat/elf";

export const getSessionDataSource = createRequestDataSource({
  store: sessionStore,
  data$: () => sessionStore.pipe(select((state) => state.user)),
  requestKey: "getUser",
  dataKey: "user",
});
