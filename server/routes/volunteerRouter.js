import express from "express";
import {
  getNgoVolunteers,
  joinNgo,
} from "../controllers/volunteerController.js";
import { checkAdmin, checkToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// add volunteer
router.get("/join_ngo/:ngo_id/:user_id", checkToken, joinNgo);

// get all volunteers
router.get("/get_ngo_volunteers/:ngo_id", checkAdmin, getNgoVolunteers);

export default router;
