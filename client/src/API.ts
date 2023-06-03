import axios, { AxiosResponse } from "axios";
import { ApiDataType, ITimeLog } from "./type";

const baseUrl: string = "http://localhost:4000";

export const getTimeLogs = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const timeLogs: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/time-logs"
    );
    return timeLogs;
  } catch (error) {
    throw error;
  }
};

export const addTimeLog = async (
  formData: ITimeLog
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const timeLog: Omit<ITimeLog, "_id"> = {
      name: formData.name,
      start: formData.start,
      end: formData.end,
    };
    const saveTimeLog: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-time-log",
      timeLog
    );
    return saveTimeLog;
  } catch (error) {
    throw error;
  }
};

export const deleteTimeLog = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTimeLog: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-time-log/${_id}`
    );
    return deletedTimeLog;
  } catch (error) {
    throw error;
  }
};
