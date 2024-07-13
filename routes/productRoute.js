const express = require("express");
const formidable = require("express-formidable");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  getProductPhoto,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  realtedProductController,
  productCategoryController,
  brainTreePaymentController,
  braintreeTokenController,
} = require("../controllers/productController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();
// Create Products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Get all Products
router.get("/get-product", getProductController);
// Get single Product
router.get("/get-product/:slug", getSingleProductController);
// Get Image Of product
router.get("/product-photo/:pid", getProductPhoto);
//Delete Product
router.delete("/delete-product/:pid", deleteProductController);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.post("/product-filters", productFiltersController);
router.get("/product-count", productCountController);
router.get("/product-list/:page", productListController);
//search product
router.get("/search/:keyword", searchProductController);
//similar product
router.get("/related-product/:pid/:cid", realtedProductController);
//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

module.exports = router;
