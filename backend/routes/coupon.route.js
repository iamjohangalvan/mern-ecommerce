import express from "express";
import { validateCoupon, getCoupon } from "../controllers/coupon.controller.js";
import { protectRoute, adminRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getCoupon);
router.post("/validate", protectRoute, adminRoute, validateCoupon);

export default router;
