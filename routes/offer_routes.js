const express = require("express");
const router = express.Router();

const offerController = require("../controllers/offer_controller");

router.use(express.json());

router.post("/create", offerController.CreateOffer);
router.get("/offers", offerController.GetOfferList);

module.exports = router;