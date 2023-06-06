import express from "express";
import { addNgo, getAllNgo, getNgoById, getNgoOfUser } from "../controllers/ngoController.js";
import { checkAdmin, checkToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add Ngo
router.post("/add_ngo", checkAdmin, addNgo);

// Get all Ngo
router.get("/get_all_ngo", getAllNgo);

//Get ngo by id
router.get("/get_ngo_by_id/:id", checkToken, getNgoById);

// Get ngo of user_id
router.get("/get_ngo_of_user", checkToken, getNgoOfUser);

export default router;
