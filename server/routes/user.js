const express = require('express');

const { createUser, updateUser, deleteUser, getUser, getUsers, getUsersStats } = require('../controllers/user');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/user', createUser);
// PUT => /api/users/:id
router.patch('/:id', verifyTokenAndAuthorization, updateUser);

// DELETE => /api/users/:id
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

// GET => /api/users/stats
router.get('/stats', verifyTokenAndAdmin, getUsersStats);   // must be here

// GET => /api/users/:id
router.get('/:id', verifyTokenAndAdmin, getUser);           // must be here

// GET => /api/users
router.get('/', verifyTokenAndAdmin, getUsers);

module.exports = router;