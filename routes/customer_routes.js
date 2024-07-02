const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer_controller");

router.use(express.json());

router.post("/create", customerController.CreateCustomer);
router.get("/customer/:customer_id", customerController.FindCustomer);
router.put("/customers", customerController.UpdateCustomer);
router.delete("/customer/:customer_id", customerController.DeleteCustomer);

module.exports = router;