"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timeLogs_1 = require("../controllers/timeLogs");
const router = (0, express_1.Router)();
router.get("/time-logs", timeLogs_1.getTimeLogs);
router.post("/add-time-log", timeLogs_1.addTimeLog);
router.put("/edit-time-log/:id", timeLogs_1.updateTimeLog);
router.delete("/delete-time-log/:id", timeLogs_1.deleteTimeLog);
exports.default = router;