import { rules } from './cases';
import { ERRORMESSAGE } from '../constant';

/**
 *  Validate password
 */
export const validate = (password: string) => {
    rules(password).forEach((rule, index) => {
        if(!rule) {
            ERRORMESSAGE[index]['value'] = true;
        }
        else {
            ERRORMESSAGE[index]['value'] = false;
        }
    });

    return ERRORMESSAGE;
}