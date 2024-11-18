//
//                        Created by Max Whitten
//
//       ▓█████  ▄████▄   ██▓    ▓██   ██▓ ██▓███    ██████ ▓█████
//       ▓█   ▀ ▒██▀ ▀█  ▓██▒     ▒██  ██▒▓██░  ██▒▒██    ▒ ▓█   ▀
//       ▒███   ▒▓█    ▄ ▒██░      ▒██ ██░▓██░ ██▓▒░ ▓██▄   ▒███
//       ▒▓█  ▄ ▒▓▓▄ ▄██▒▒██░      ░ ▐██▓░▒██▄█▓▒ ▒  ▒   ██▒▒▓█  ▄
//       ░▒████▒▒ ▓███▀ ░░██████▒  ░ ██▒▓░▒██▒ ░  ░▒██████▒▒░▒████▒
//       ░░ ▒░ ░░ ░▒ ▒  ░░ ▒░▓  ░   ██▒▒▒ ▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░░░ ▒░ ░
//        ░ ░  ░  ░  ▒   ░ ░ ▒  ░ ▓██ ░▒░ ░▒ ░     ░ ░▒  ░ ░ ░ ░  ░
//          ░   ░          ░ ░    ▒ ▒ ░░  ░░       ░  ░  ░     ░
//          ░  ░░ ░          ░  ░ ░ ░                    ░     ░  ░
//              ░                 ░ ░
//
//                                ECLYPSE
//

const app = require('express')();
const cors = require('cors');

app.use(cors());

const rootRouter = require("./routes/root");
const cssRouter = require("./routes/css");
const jsRouter = require("./routes/js");
const mediaRouter = require("./routes/media");
const calRouter = require('./routes/cal')

app.use("/", rootRouter);
app.use("/css", cssRouter);
app.use("/js", jsRouter);
app.use("/media", mediaRouter);
app.use("/cal", calRouter);

// specifying server port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});