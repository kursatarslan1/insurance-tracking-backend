const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Offer{
    static async Create(offer){
        try{
            const newOffer = prisma.offer.create({
                data:{
                    customer_full_name: offer.customer_full_name,
                    insurance_type: offer.insurance_type,
                    address: offer.address,
                    document_no: offer.document_no,
                    serial_no: offer.serial_no,
                    created_at: offer.created_at,
                    insure_amount: offer.insure_amount,
                    issue_date: offer.issue_date,
                    plate: offer.plate,
                    referance_code: offer.referance_code,
                    uavt_code: offer.uavt_code
                },
            });
            return newOffer;
        } catch (error){
            console.log("An error occured creating offer: ", error);
            return false;
        }
    }

    static async GetOffers(){
        try{
            const offers = prisma.offer.findMany();

            return offers;
        } catch (error){
            console.log("An error occured getting offer: ", error);
            return false;
        }
    }
}

module.exports = { Offer };