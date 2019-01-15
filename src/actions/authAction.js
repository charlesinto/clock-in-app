import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGE, PASSWORD_CHANGE } from './types';

export const authenticateUser = ({ email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: {}})
        Actions.main();
    }
};

export const emailChange = ({ email }) => {
    return (dispatch) => {
        dispatch({ type: EMAIL_CHANGE, payload: { email } }); 
    };
};

export const passwordChange = ({ password }) => {
    return (dispatch) => {
        dispatch({ type: PASSWORD_CHANGE, payload: { password } });
    };
};

