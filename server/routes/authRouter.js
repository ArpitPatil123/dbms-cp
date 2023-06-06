import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

// Register a new user
router.post("/register", registerController);

// Login a user
router.post("/login", loginController);

// Logout a user
router.get("/logout", logoutController);

export default router;
