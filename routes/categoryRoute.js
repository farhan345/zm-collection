const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  categoryController,
  updateCategoryController,
  getAllCategory,
  getSingleCategory,
  deleteCategory
} = require("../controllers/categoryController");
const router = express.Router();
//Create Category
router.post("/create-category", requireSignIn, isAdmin, categoryController);
//Update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//get All Category
router.get("/get-category", getAllCategory);
//Get single Category
router.get("/single-category/:slug", getSingleCategory);
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory);

module.exports = router;
