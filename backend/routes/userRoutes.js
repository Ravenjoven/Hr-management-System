const express = require('express');
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userControllers');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();

// Route to fetch all users
router.get('/allusers', isAuthenticated, isAdmin, allUsers);

// Route to fetch a single user by ID
router.get('/user/:id', isAuthenticated, singleUser);
// api/user/edit/id
router.put('/user/edit/:id',isAuthenticated, editUser);
// api/admin/user/delete/id
router.delete('/admin/user/delete/:id',isAuthenticated, isAdmin, deleteUser);

 
module.exports = router;
