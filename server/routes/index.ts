import { Router } from "express";
import {
  getTimeLogs,
  addTimeLog,
  updateTimeLog,
  deleteTimeLog,
} from "../controllers/timeLogs";

const router: Router = Router();

router.get("/time-logs", getTimeLogs);

router.post("/add-time-log", addTimeLog);

router.put("/edit-time-log/:id", updateTimeLog);

router.delete("/delete-time-log/:id", deleteTimeLog);

export default router;
