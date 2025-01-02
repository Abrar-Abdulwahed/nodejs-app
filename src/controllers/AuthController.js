const responseHandler = require('@/utils/responseHandler');
exports.login = async (req, res) => {  
    const { email, password } = req.body;
    if(!email || !password) {
        return responseHandler.validationError(res, [], 'Email and Password are required');
    }
}

exports.getUserProfile = async (req, res) => {
    const { userId } = req.params;
}