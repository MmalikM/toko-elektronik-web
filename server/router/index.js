"use strict";

const productController = require("../controllers/productController");
const userController = require("../controllers/userControllers");
const authentification = require("../midleware/authen");
const admin = require("./admin");
const customer = require("./customer");

const router = require("express").Router();


router.post("/login", userController.login);
router.post("/register", authentification ,userController.register);
router.use("/admin", authentification, admin)
router.use("/customers",customer)

module.exports = router;
