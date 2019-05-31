import validator from 'validator';
import validations from './../validations/validations';

class SubscriberValidations {
    create(req, res, next) {
         const name = req.body.name || '';
         const phone = req.body.phone || '';

         if(!validations.isValidName(name)) {
            res.json({
                error: "Name field is required"
            });
         } else if(validations) {

         } else {
             next();
         }
         
    }
}

const subscriberValidation = new SubscriberValidations();

export default subscriberValidation;