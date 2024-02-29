const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library');

//google aoi test
router.post('/',async function(req,res,next){
    res.header('Access-control-Allow-Origin', 'http://localhost:5173');
    res.header('Referrer-Policy', 'no-referrer-when-downgrade');
    const redirectUrl='http://localhost:9000/api/auth';

    const oAuth2Client= new OAuth2Client(
        process.env.ClIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl
    );
    const authorizedURL=oAuth2Client.generateAuthUrl({
        access_type:'offline',
        scope:'https//www.googleapis.com/auth/userinfo.profile openid',
        prompt:'consent'
    });
    res.json({url:authorizedURL})
});

module.exports = router;