const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class User {
    static async Create(user) {
        try {
            const newUser = await prisma.user.create({
                data: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    phone_number: user.phone_number,
                    company_name: user.company_name,
                },
            });
            return newUser;
        } catch (error) {
            console.log("Error creating user: ", error);
            return false;
        }
    }

    static async FindByEmail(email) {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });
            return user;
        } catch (error) {
            console.log("Error executing FindByEmail query: ", error);
            return false;
        }
    }

    static async UpdateUser(user) {
        try {
            const updateUser = await prisma.user.update({
                where: {
                    user_id: user.user_id,
                },
                data: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    phone_number: user.phone_number,
                    company_name: user.company_name,
                },
            });
            return updateUser;
        } catch (error) {
            console.log("An error occurred updating user: ", error);
            return false;
        }
    }

    static async DeleteUserById(user_id) {
        try {
            await prisma.password.deleteMany({
                where: {
                    user_id: user_id,
                },
            });

            const deleteUser = await prisma.user.delete({
                where: {
                    user_id: user_id,
                },
            });
            return deleteUser;
        } catch (error) {
            console.log("An error occurred deleting user: ", error);
            return false;
        }
    }
}

module.exports = { User };
