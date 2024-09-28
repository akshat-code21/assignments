//  start writing from here
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config.js');
function auth(req,res,next){
    const token = req.headers.token;
    
    if(token)
    {
        const decodedData = jwt.verify(token,JWT_SECRET);
        req.username = decodedData.username;
        next()
    }
    else{
        res.status(403).json({
            message : "Incorrect Creds."
        })
    }
}
module.exports = {
    auth,JWT_SECRET
};