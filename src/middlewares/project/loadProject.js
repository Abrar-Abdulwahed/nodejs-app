const Project = require('@/models/Project');

const loadProject = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ status: 404, message: 'Project not found' });
    }
    req.project = project;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = loadProject;
