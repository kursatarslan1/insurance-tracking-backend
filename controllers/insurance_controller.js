const { Insurance } = require("../models/insurance_model");

async function CreateInsurance(req, res){
    const { insurance } = req.body;

    try{
        const newInsurance = await Insurance.Create(insurance);

        if(!insurance){
            return res.status(400).json({ message: "An error occured creating insurance" });
        }

        return res.status(200).json({ newInsurance });
    } catch (error){
        console.log('An error occured creating insurance: ', error);
        return res.status(400).json({ message: "An error occured creating insurance: ", error});
    }
}

async function CancelInsurance(req, res){
    const insurance_id = parseInt(req.params.insurance_id, 10);

    try{
        const cancelInsurance = await Insurance.CancelInsurance(insurance_id);

        if(!cancelInsurance){
            return res.status(400).json({ message: "An error occured canceling insurance" });
        }

        return res.status(200).json({ cancelInsurance });
    } catch (error){
        console.log("An error occured canceling insurance: ", error);
        return res.status(400).json({ message: "An error occured canceling insurance: ", error});
    }
}

async function GetInsureList(req, res){
    const customer_id = parseInt(req.params.customer_id, 10);

    try{
        const insureList = await Insurance.GetInsureListByCustomerId(customer_id);

        if(!insureList){
            return res.status(400).json({ message: "An error occured getting insurance list" });
        }

        return res.status(200).json({ insureList });
    } catch (error){
        console.log("An error occured getting insurance list: ", error);
        return res.status(400).json({ message: "An error occured getting insurance list: ", error});
    }
}

module.exports = { CreateInsurance, CancelInsurance, GetInsureList };