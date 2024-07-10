const { Offer } = require("../models/offer_model");

async function CreateOffer(req, res){
    const { offer } = req.body;

    try{
        const offerResult = await Offer.Create(offer);

        if(!offerResult){
            return res.status(400).json({ message: "An error occured creating offer" });
        }

        return res.json({ offerResult });
    } catch (error){
        console.log("An error occured creating offer: ", error);
        return res.status(400).json({ message: "An error occured creating offer" });
    }
}

async function GetOfferList(req, res){
    try{
        const offerList = await Offer.GetOffers();

        if(!offerList){
            return res.status(400).json({ message: "An error occured getting offer" });
        }
        return res.json({ offerList });
    } catch (error){
        console.log("An error occured getting offer: ", error);
        return res.status(400).json({ message: "An error occured getting offer" });
    }
}

module.exports = { CreateOffer, GetOfferList };