

const express = require("express");
const router = express.Router();

const ownerModel = require("../models/oweners-model"); 

router.get("/", function(req, res) {
    console.log("Received request for /owners");
    res.send("hey it is working");
});

router.post("/create", async function(req, res) {
    try {
        let owners = await ownerModel.find();
        if (owners.length > 2) { 
            return res.status(400).send("you cannot create more admins");
        }
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).send("All fields are required");
        }

        const createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });

        console.log("Owner created successfully:", createdOwner);
        res.status(201).send(createdOwner);

    } catch (error) {
        console.error("Error while creating owner:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
