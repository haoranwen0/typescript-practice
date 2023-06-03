"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTimeLog = exports.updateTimeLog = exports.addTimeLog = exports.getTimeLogs = void 0;
const time_log_1 = __importDefault(require("../../models/time-log"));
const getTimeLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const timeLogs = yield time_log_1.default.find();
        res.status(200).json({ timeLogs });
    }
    catch (error) {
        throw error;
    }
});
exports.getTimeLogs = getTimeLogs;
const addTimeLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const timeLog = new time_log_1.default({
            name: body.name,
            start: body.start,
            end: body.end,
        });
        const newTimeLog = yield timeLog.save();
        const allTimeLogs = yield time_log_1.default.find();
        res.status(201).json({
            message: "Time log added",
            timeLog: newTimeLog,
            timeLogs: allTimeLogs,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addTimeLog = addTimeLog;
const updateTimeLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTimeLog = yield time_log_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTimeLogs = yield time_log_1.default.find();
        res.status(200).json({
            message: "Time log updated",
            timeLog: updateTimeLog,
            timeLogs: allTimeLogs,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTimeLog = updateTimeLog;
const deleteTimeLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTimeLog = yield time_log_1.default.findByIdAndRemove(req.params.id);
        const allTimeLogs = yield time_log_1.default.find();
        res.status(200).json({
            message: "Time log deleted",
            timeLog: deletedTimeLog,
            timeLogs: allTimeLogs,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTimeLog = deleteTimeLog;
