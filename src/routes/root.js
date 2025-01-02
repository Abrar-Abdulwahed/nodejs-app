const express = require('express')
const router = express.Router()
const verifyToken = require('@/middlewares/auth');
const { viewProject, updateProject } = require('@/controllers/ProjectController');
// const NoteController = require('@/controllers/NoteController')
// router.get('/get-all-notes', NoteController.getAllNotes);

router.get('/:id', verifyToken, viewProject)
router.put('/:id', verifyToken, updateProject)

module.exports = router


