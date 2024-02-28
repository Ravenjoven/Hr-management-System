const express = require('express');
const { signup, signin, logout, userProfile} = require('../controllers/authControllers');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library');

// auth routes
//api/signup
router.post('/signup', signup); 
//api/signin
router.post('/signin', signin); 
//api/logout
router.get('/logout', logout); 
//api/me
router.get('/me', isAuthenticated, userProfile); 


//test
async function getUserData(access_token){
    const response =await fetch(`https://www.googleapis.com/oauth2/v3/userinfor?access_token${access_token}`);
    const data=await response.json();
    console.log('data', data);
}

router.get('/google',async function(req, res, next){
    const code=req.query.code;
    try{
        const redirectURL= 'http://localhost:9000/auth';
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectURL
        );
        const res= await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(res.tokens);
        console.log('Token acquired');
        const user = oAuth2Client.credentials;
        console.log('credentials', user);
        await getUserData(user.access_token);
    }catch(err){
        console.log(`Error with signing in with Google`);
    }
});


module.exports = router;