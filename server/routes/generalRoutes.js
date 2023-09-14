import express from "express";
import { getUser , getDashboardStats } from "../controllers/general.js";
// in the line 2 I delete the "getDashboardStats" 
const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;