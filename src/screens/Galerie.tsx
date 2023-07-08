import {Stack} from "@mui/material";
import mug from "../assets/mug.jpg"
import cobalt from "../assets/cobalt.jpg"
import log from "../assets/log.jpg"

const galeries = [
  mug,
  cobalt,
  log
]
export const Galery = () => {
  return <Stack direction="row" spacing={10}>
    {galeries.map((url, index) =>
      <Stack key={index} height="20%" width="20%">
        <img src={url}/>
      </Stack>)}
  </Stack>
}