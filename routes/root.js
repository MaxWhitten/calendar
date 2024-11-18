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

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  console.log(`New http request to '/' from ip ${req.headers['x-forwarded-for'] || req.socket.remoteAddress }`)
  if (req.cookies.session) {
    fs.readFile(`./static/html/main.html`, function (err, data) {
      if (err) {
        res.send("Oops! Couldn't find that file.");
      } else {
        res.contentType('text/html');
        res.send(data);
      }
      res.end();
    });
  } else {
    fs.readFile(`./static/html/login.html`, function (err, data) {
      if (err) {
        res.send("Oops! Couldn't find that file.");
      } else {
        res.contentType('text/html');
        res.send(data);
      }
      res.end();
    });
  }
});

module.exports = router;