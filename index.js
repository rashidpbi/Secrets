import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var userIsAuthorised = false;

function passwordCheck(req, res, next) {
  const password = req.body.password;

  if (password === "Programming") {
    userIsAuthorised = true;
  } else userIsAuthorised = false;

  next();
}

app.use(passwordCheck);

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, function () {
  console.log("listening to port ", port);
});
