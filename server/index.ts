import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(routes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@time-log-cluster.u9ni5mk.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on test http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
