import * as actionTypes from './actionTypes';

const initialState = {
    auth: false,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_AUTH:
            return{
                ...state,
                auth: !state.auth,
            };
        default:
            return state;
    }
};

export default auth;