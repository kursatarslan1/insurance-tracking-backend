const { Customer } = require("../models/customer_model");

async function CreateCustomer(req, res){
    const { customer } = req.body;

    try{
        const existingCustomer = await Customer.FindIdentity(customer.identity_number);

        if(existingCustomer){
            return res.status(400).json({ message: "Customer with this id already exists."});
        }

        const customerResult = await Customer.Create(customer);

        if(!customerResult){
            return res.status(400).json({ message: "An error occured creating customer" });
        }

        return res.status(200).json({ message: "Customer created successfully. "});
    } catch (error){
        console.log("An error occured creating customer: ", error);
        return res.status(400).json({ message: "An error occured creating customer: ", error});
    }
}

async function FindCustomer(req, res){
    const customer_id = parseInt(req.params.customer_id, 10);

    try{
        const customerResult = await Customer.FindById(customer_id);

        if(!customerResult){
            return res.status(400).json({ message: "An error occured finding customer" });
        }

        return res.status(200).json({ customer: customerResult })
    } catch (error){
        console.log("An error occured finding customer: ", error);
        return res.status(400).json({ message: "An error occured finding customer: ", error});
    }
}

async function UpdateCustomer(req, res){
    const { customer } = req.body;

    try{
        const updateResult = await Customer.UpdateCustomer(customer);

        if(!updateResult){
            return res.status(400).json({ message: "An error occured updating customer" });
        }

        return res.status(200).json({ customer: updateResult });
    } catch (error){
        console.log("An error occured updating customer: ", error);
        return res.status(400).json({ message: "An error occured updating customer: ", error});
    }
}

async function DeleteCustomer(req, res){
    const customer_id = parseInt(req.params.customer_id, 10);

    try{
        const deleteResult = await Customer.DeleteCustomerById(customer_id);

        if(!deleteResult){
            return res.status(400).json({ message: "An error occured deleting customer" });
        }
        
        return res.status(200).json({ deletedCustomer: deleteResult });
    } catch (error){
        console.log("An error occured deleting customer: ", error);
        return res.status(400).json({ message: "An error occured deleting customer: ", error});
    }
}

module.exports = { CreateCustomer, FindCustomer, UpdateCustomer, DeleteCustomer };