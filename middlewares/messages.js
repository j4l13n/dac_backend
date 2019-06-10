import validator from 'validator';

class MessageValidation {
    send(req, res, next) {
        const name = req.body.name || '';
        const phone = req.body.phone || '';
        const title = req.body.title || '';
        const description = req.body.description || '';

        if(validator.isEmpty(name)) {
            res.json({
                error: "Name field is required"
            });
        } else if(validator.isAlpha(name)) {
            res.json({
                error: "Your name must only have alpha"
            });
        } else if(!validator.isMobilePhone(phone)) {
            res.json({
                error: "Your phone number is not valid"
            });
        } else if(validator.isEmpty(title)) {
            res.json({
                error: "Title must not be empty"
            });
        } else if(validator.isEmpty(description)) {
            res.json({
                error: "Description must contain at least 10 words."
            })
        } else {
            next();
        }
    }
}

const messageValidation = new MessageValidation();
export default messageValidation;