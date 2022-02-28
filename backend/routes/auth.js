const express = require('express');
const router = express.Router();

const {registerUser, loginUser, logout, getUser, updateUser, deleteUser} = require('../controllers/userControler');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/user/:id').get(getUser);
router.route('/user-update/:id').put(updateUser);

router.route('/logout').get(logout);

router.route('/user-delete/:id').delete(deleteUser);

module.exports = router;