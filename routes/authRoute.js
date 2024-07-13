const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrderController,
  getAllOrdersController,
  orderStatusController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.get("/test", requireSignIn, isAdmin, testController);
// private user route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// private admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//profile Route
router.put("/profile", requireSignIn, updateProfileController);
// orders
router.get("/orders", requireSignIn, getOrderController);
//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
// order STatus Update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

module.exports = router;
