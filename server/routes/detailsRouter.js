import express from "express";
import { checkAdmin } from "../middlewares/authMiddleware.js";
import { detailsController } from "../controllers/detailsController.js";

const router = express.Router();

router.get("/details", checkAdmin, detailsController);

export default router;