const authorize = (policy, getResource) => (req, res, next) => {
    const user = req.user;
    const resource = getResource(req);
    if(policy(user, resource)){
        return next();
    } else {
        return res.status(403).json({ status: 403, message: 'Forbidden' });
    } 
}

module.exports = authorize;