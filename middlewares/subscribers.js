import validator from 'validator';

class SubscriberValidations {
    create(req, res, next) {
         const name = req.body.name || '';
         const phone = req.body.phone || '';

         if(validator.isEmpty(name)) {
            res.json({
                error: "Name field is required"
            })
         } else if(validator.isAlpha(name)) {
            res.json({
                error: "Name must contain only alphanumeric"
            });
         } else if(!validator.isMobilePhone(phone)) {
            res.json({
                error: "Phone must have twelve numbers example: 250788384548"
            })
         } else {
             next();
         }
         
    }
}

const subscriberValidation = new SubscriberValidations();

export default subscriberValidation;