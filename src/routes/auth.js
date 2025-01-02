const express = require('express')
const router = express.Router()
const { login, getUserProfile } = require('@/controllers/AuthController');

router.post('/login', login)
router.get('/profile/:userId', getUserProfile)

module.exports = router


