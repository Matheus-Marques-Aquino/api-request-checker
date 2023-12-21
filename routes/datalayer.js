const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => { 
    res.sendFile("index.html", { root: "public" });  
});

module.exports = router;