const joi  = require('joi');

const userSchema = joi.object({
    firstName: joi.string().min(3).max(30).required(),
    lastName: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    age: joi.number().min(1).max(90).required(),
    mobileNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    isActive: joi.boolean().default(true)
});

module.exports = {userSchema};
