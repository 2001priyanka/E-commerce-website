import express from "express";
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";
    
const router = express.Router();

router.route("/").post(RegisterUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")    
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
