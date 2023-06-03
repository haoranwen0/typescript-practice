interface ITimeLog {
  _id: string;
  name: string;
  start: string;
  end: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TimeLogProps {
  timeLog: ITimeLog;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: ITimeLog[];
  timeLog?: ITimeLog;
};

export { ITimeLog, TimeLogProps, ApiDataType };
