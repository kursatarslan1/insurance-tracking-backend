const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Insurance{
    static async Create(insurance){
        try{
            const newInsurance = prisma.insure.create({
                data:{
                    customer_id: insurance.customer_id,
                    insurance_type: insurance.insurance_type,
                    address: insurance.address,
                    document_no: insurance.document_no,
                    serial_no: insurance.serial_no,
                    creator_staff: insurance.creator_staff,
                    insure_amount: insurance.insure_amount,
                    is_active: true,
                    plate: insurance.plate,
                    uavt_code: insurance.uavt_code,
                    issue_date: new Date(insurance.issue_date),
                    referance_code: insurance.referance_code,
                },
            });
            return newInsurance;
        } catch (error){
            console.log("An error occured creating insurance: ", error);
            return false;
        }
    }

    static async CancelInsurance(insurance_id) {
        try {
            const updatedInsurance = await prisma.insure.update({
                where: {
                    insure_id: insurance_id
                },
                data: {
                    is_active: false
                }
            });
            return updatedInsurance;
        } catch (error) {
            console.error('Error cancelling insurance:', error);
            return false;
        } 
    }

    static async GetInsureListByCustomerId(customer_id){
        try{
            const insureList = await prisma.insure.findMany({
                where: {
                    customer_id: customer_id
                },
            });
            return insureList;
        } catch (error){
            console.error('Error getting insurance list:', error);
            return false;
        }
    }
}

module.exports = { Insurance };