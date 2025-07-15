import express from "express";
import cors from "cors";
import { router } from "../backend/routes/index.js";
import dotenv from "dotenv";
import UserRouter from "./routes/User.js";
import OrderRouter from "./routes/Order.js";

dotenv.config({ path: "../.env" });
console.log("fh");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ddd", (req, res) => {
  res.json({
    msg: "test",
  });
});

app.use("/api/v1", UserRouter);
app.use("/api/v1/orders", OrderRouter);

console.log("fhrrrrrrrrrrr");

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
