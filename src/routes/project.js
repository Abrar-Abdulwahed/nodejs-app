const express = require('express')
const router = express.Router()
const verifyToken = require('@/middlewares/auth');
const { viewProject, updateProject } = require('@/controllers/ProjectController');
const authorize = require('@/middlewares/authorize')
const { canViewProject, canUpdateProject } = require('@/policies/project')

router.get('/project/:id', authorize(canViewProject, req => req.project), viewProject)
router.put('/project/edit/:id', verifyToken, authorize(canUpdateProject, req => req.project), updateProject)

module.exports = router


