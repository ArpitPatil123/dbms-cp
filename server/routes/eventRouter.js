import express from "express";
import {
  addEvent,
  getEvent,
  getEventVolunteers,
  getNgoEvents,
  registerForEvent,
} from "../controllers/eventController.js";
import { checkAdmin, checkToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add Event
router.post("/add_event", checkAdmin, addEvent);

// Get all Event
router.get("/get_ngo_event/:ngo_id", checkToken, getNgoEvents);

// Get Event
router.get("/get_event/:event_id", checkToken, getEvent);

// Register Volunteer for Event
router.get("/register_for_event/:event_id", checkToken, registerForEvent);

// Get event volunteers
router.get("/get_event_volunteers/:event_id", checkToken, getEventVolunteers);

export default router;
