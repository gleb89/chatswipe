export const SET_USER_LOGIN = 'SET_USER_LOGIN'

export const setLogin = token => dispatch => {
    dispatch({
        type: SET_USER_LOGIN ,
        payload: token ,
    });
};