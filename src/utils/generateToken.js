const jwt = require('jsonwebtoken');
require('dotenv').config()

const user = {
    name: 'abrar', 
    email: 'abrar@gmail.com',
    role: 'admin',
    department: 'IT',
    accessLevel: 4,
}
const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
console.log('token', process.env.JWT_SECRET, token)