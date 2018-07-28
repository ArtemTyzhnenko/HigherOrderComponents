import * as actionTypes from './actionTypes';

let initialState = {
    comments: [],
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_COMMENT:
            return {
                ...state,
                comments:[
                    ...state.comments,
                    action.payload,
                ]
            };
        case actionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments:[
                    ...state.comments,
                    ...action.payload,
                ]
            };
        default:
            return state;
    }
};

export default comments;