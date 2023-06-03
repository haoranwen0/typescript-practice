import { Response, Request } from "express";
import { ITimeLog } from "../../types/time-log";
import TimeLog from "../../models/time-log";

const getTimeLogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const timeLogs: ITimeLog[] = await TimeLog.find();
    res.status(200).json({ timeLogs });
  } catch (error) {
    throw error;
  }
};

const addTimeLog = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITimeLog, "name" | "start" | "end">;

    const timeLog: ITimeLog = new TimeLog({
      name: body.name,
      start: body.start,
      end: body.end,
    });

    const newTimeLog: ITimeLog = await timeLog.save();
    const allTimeLogs: ITimeLog[] = await TimeLog.find();

    res.status(201).json({
      message: "Time log added",
      timeLog: newTimeLog,
      timeLogs: allTimeLogs,
    });
  } catch (error) {
    throw error;
  }
};

const updateTimeLog = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTimeLog: ITimeLog | null = await TimeLog.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTimeLogs: ITimeLog[] = await TimeLog.find();
    res.status(200).json({
      message: "Time log updated",
      timeLog: updateTimeLog,
      timeLogs: allTimeLogs,
    });
  } catch (error) {
    throw error;
  }
};

const deleteTimeLog = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTimeLog: ITimeLog | null = await TimeLog.findByIdAndRemove(
      req.params.id
    );
    const allTimeLogs: ITimeLog[] = await TimeLog.find();
    res.status(200).json({
      message: "Time log deleted",
      timeLog: deletedTimeLog,
      timeLogs: allTimeLogs,
    });
  } catch (error) {
    throw error;
  }
};

export { getTimeLogs, addTimeLog, updateTimeLog, deleteTimeLog };
