import { DisTube } from "distube";
import { client } from "../index";
import { SpotifyPlugin } from "@distube/spotify";

export default new DisTube(client, {
  leaveOnFinish: true,
  leaveOnEmpty: true,
  leaveOnStop: true,
  emitNewSongOnly: false,
  plugins: [new SpotifyPlugin()],
});
