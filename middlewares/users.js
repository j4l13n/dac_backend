import validator from 'validator';
import validations from './../validations/validations';

class UserValidator {
    login(req, res, next) {
        const email = req.body.email || '';
        const password = req.body.password || '';

        if(validator.isEmpty(email)) {
            res.json({
                error: "Email field is required"
            });
        } else if(validator.isEmpty(password)) {
            res.json({
                error: "Password field is required"
            });
        } else if(!validator.isEmail(email)) {
            res.json({
                error: `Email with ${email} is not valid`
            });
        } else if(!validations.isValidPassword(password)) {
            res.json({
                error: `Password must contain uppercase, lowercase letters and numbers`
            });
        } else {
            next();
        }
    }

    register(req, res, next) {
        const name = req.body.name || '';
        const email = req.body.email || '';
        const password = req.body.password || '';

        if(validator.isEmpty(name)) {
            res.json({
                error: "Name field is required"
            })
        } else if(validations.isValidName(name)) {
            res.json({
                error: `Name with ${name} is not valid`
            })
        } else if(validator.isEmpty(email)) {
            res.json({
                error: "Email field is required"
            });
        } else if(validator.isEmpty(password)) {
            res.json({
                error: "Password field is required"
            });
        } else if(!validator.isEmail(email)) {
            res.json({
                error: `Email with ${email} is not valid`
            });
        } else if(!validations.isValidPassword(password)) {
            res.json({
                error: `Password must contain uppercase, lowercase letters and numbers`
            });
        } else {
            next();
        }
    }
}

const userValidator = new UserValidator();
export default userValidator;