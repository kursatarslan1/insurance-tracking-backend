// index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

const baseURL = "/insurance";

const userRoutes = require("./routes/user_routes");
const customerRoutes = require("./routes/customer_routes");
const insuranceRoutes = require("./routes/insurance_routes");

require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.set("trust proxy", true);

app.use(express.json({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(baseURL + "/users", userRoutes);
app.use(baseURL + "/customers", customerRoutes);
app.use(baseURL + "/insurances", insuranceRoutes);

if (!module.parent) {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
  
  module.exports = app;