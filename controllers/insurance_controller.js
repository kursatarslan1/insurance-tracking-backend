const { Insurance } = require("../models/insurance_model");

async function CreateInsurance(req, res){
    const { insurance } = req.body;

    try{
        const newInsurance = await Insurance.Create(insurance);

        if(!insurance){
            return res.status(400).json({ message: "An error occured creating insurance" });
        }

        return res.status(200).json({ insurance });
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

module.exports = { CreateInsurance, CancelInsurance };