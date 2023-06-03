import { ITimeLog } from "../types/time-log";
import { model, Schema } from "mongoose";

const timeLogSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ITimeLog>("TimeLog", timeLogSchema);
