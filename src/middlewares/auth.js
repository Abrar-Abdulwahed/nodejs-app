const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if(authHeader && authHeader.startsWith('Bearer')){
        const token = authHeader.split(" ")[1];
        if (!token) return res.status(401).json({ status: 401, message: 'Access denied' });
        try {
            const decoded = jwt.verify(token, process.env.jWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ status: 401, messgae: 'Invalid token' });
        }
    }
    
};
    
module.exports = verifyToken;
    