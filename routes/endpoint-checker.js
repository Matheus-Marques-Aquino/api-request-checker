const express = require("express");
const router = express.Router();

router.all('/', async (req, res)=>{
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