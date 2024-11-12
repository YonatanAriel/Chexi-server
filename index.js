require("dotenv").config();
require("./DL/db").connect();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(require("cors")());

app.use("/users", require("./Routes/users.route"));
// app.use("/playlists", require("./Routes/playlists.route"));
app.use("/playlists", require("./Routes/playlists.route"));
app.use("/songs", require("./Routes/songs.route"));

app.listen(PORT, () => {
  console.log("Server is up ᕦ(ò_óˇ)ᕤ", `http://localhost:${PORT}`);
});
