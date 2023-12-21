const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => { 
    res.sendFile("index.html", { root: "public" });  
});

router.post('/', async (req, res)=>{
    const {
        body,
        headers,
        method,
        protocol
    } = req;

    console.log(
        'Request:', 
        { 
            body, 
            headers, 
            method, 
            protocol 
        }
    );

    return res.status(200).json({
        body,
        headers,
        method,
        protocol
    });
});

module.exports = router;