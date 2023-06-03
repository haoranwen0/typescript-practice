import { Document } from "mongoose";

export interface ITimeLog extends Document {
  name: string;
  start: string;
  end: string;
}
