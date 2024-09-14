const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

const port = 4000;

const tokenData = {
  name: "Fareed",
  role: "admin",
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: email,
      password: password,
      expiresInMins: 30, // optional, defaults to 60
    }),
  });

  const data = await response.json();

  res
    .status(202)
    .cookie("refreshToken", data.refreshToken, {
      sameSite: "strict",
      path: "/",
      expires: new Date(new Date().getTime() + 10000 * 1000),
      httpOnly: true,
    })
    .send(data);
});

app.get("/refreshToken", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  const response = await fetch("https://dummyjson.com/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: refreshToken,
      expiresInMins: 30, // optional, defaults to 60
    }),
  });

  const data = await response.json();

  res.send(data);
});

app.get("/logout", (req, res) => {
  res.status(200).clearCookie("refreshToken").send("Logged out");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
