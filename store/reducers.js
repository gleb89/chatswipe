import {SET_USER_LOGIN} from './actions';

const initialState = {
    token:''
    
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_LOGIN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
}



export default userReducer;