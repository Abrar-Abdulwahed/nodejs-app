exports.viewProject = async (req, res) => {
    console.log( 'data', req.project)
    return res.json({ status: 200, data: req.project });
}
exports.updateProject = async (req, res) => {
    const updatedData = req.body;
    await req.project.update(updatedData);
    return res.json({ status: 200, data: req.project });
}