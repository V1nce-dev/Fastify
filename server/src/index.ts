import express from "express";
import userDB from "./config/database";
import user from "./router/user";

const app = express();
const port = 8080;

userDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/", user);

app.listen(8080, () => {
  console.log(`running on port ${port}`);
});
