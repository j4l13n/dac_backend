/**
 * This class is for validations
 */

class Validations {
    /**
     * 
     * @param {object} email
     * @returns true if email is valid
     */
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /**
     * 
     * @param {Object} password 
     * @returns true if password contains lowercase, 
     *          uppercase and numbers.
     */
    isValidPassword(password) {
        if(/\s/.test(password)) {
            return false;
        } else if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param {object} number
     * @return true if it is a valid number 
     */

    isValidNumber(number) {
        return /^\d*$/.test(number);
    }

    /**
     * 
     * @param {object} name
     * @return true if name is has only character and one space 
     */

    isValidName(name) {
        return /^[a-zA-Z ]+$/.test(name);
    }

    /**
     * 
     * @param {object} phone
     * @return true if phone has a valid phone
     */
    isValidPhone(phone) {
        
    }
}

const validations = new Validations();

export default validations;