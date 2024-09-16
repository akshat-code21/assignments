//  start writing from here
const jwt = require('jsonwebtoken');
const JWT_SECRET = "s3cr3t";
function auth(req,res,next){
    const token = req.headers.token;
    
    if(token)
    {
        const decodedData = jwt.verify(token,JWT_SECRET);
        req.username = decodedData.username;
        next()
    }
    else{
        res.json({
            message : "Incorrect Creds."
        })
    }
}
module.exports = {
    auth,JWT_SECRET
};