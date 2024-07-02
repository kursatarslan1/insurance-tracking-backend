const express = require("express");
const router = express.Router();

const insuranceController = require("../controllers/insurance_controller");

router.use(express.json());

router.post("/create", insuranceController.CreateInsurance);
router.put("/insurance/:insurance_id", insuranceController.CancelInsurance);

module.exports = router;