const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Customer {
    static async Create(customer) {
        try {
            const newCustomer = await prisma.customer.create({
                data: {
                    first_name: customer.first_name,
                    last_name: customer.last_name,
                    email: customer.email,
                    phone_number: customer.phone_number,
                    identity_number: customer.identity_number,
                    birth_date: new Date(customer.birth_date),
                },
            });
            return newCustomer;
        } catch (error) {
            console.log("Error creating customer: ", error);
            return false;
        }
    }

    static async FindIdentity(identity_number){
        try{
            const customer = await prisma.customer.findFirst({
                where: {
                    identity_number: identity_number,
                },
            });
            return customer;
        } catch (error){
            console.log("Error finding customer by identity: ", error);
            return false;
        }
    }

    static async FindById(customer_id) {
        try {
            const customer = await prisma.customer.findUnique({
                where: {
                    customer_id: customer_id,
                },
                include: {
                    insures: true,
                }
            });
            return customer;
        } catch (error) {
            console.log("Error finding customer by ID: ", error);
            return false;
        }
    }

    static async GetAllCustomer(){
        try{
            const customers = await prisma.customer.findMany({});
            return customers;
        } catch(error){
            console.log("Error getting all customers: ", error);
            return false;
        }
    }

    static async UpdateCustomer(customer) {
        try {
            const updatedCustomer = await prisma.customer.update({
                where: {
                    customer_id: customer.customer_id,
                },
                data: {
                    first_name: customer.first_name,
                    last_name: customer.last_name,
                    email: customer.email,
                    phone_number: customer.phone_number,
                    birth_date: new Date(customer.birth_date),
                },
            });
            return updatedCustomer;
        } catch (error) {
            console.log("An error occurred updating customer: ", error);
            return false;
        }
    }

    static async DeleteCustomerById(customer_id) {
        try {
            const deletedCustomer = await prisma.customer.delete({
                where: {
                    customer_id: customer_id,
                },
            });
            return deletedCustomer;
        } catch (error) {
            console.log("An error occurred deleting customer: ", error);
            return false;
        }
    }
}

module.exports = { Customer };
