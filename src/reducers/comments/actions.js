import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveComment = (comment) => {
    return {
        type: actionTypes.SAVE_COMMENT,
        payload: comment,
    }
};

const fetchComments = () => {
    return {
        type: actionTypes.FETCH_COMMENTS,
    }
};

const fetchCommentsSuccess = (comments) => {
    return {
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        payload: comments,
    }
};

const fetchCommentsFail = () => {
    return {
        type: actionTypes.FETCH_COMMENTS_FAIL,
    }
};

export const getNewComments = () => {
    return dispatch =>{
        dispatch(fetchComments());
        return axios.get('http://jsonplaceholder.typicode.com/comments')
            .then(response => {
                const localResponse = response.data.map(item => item.name);
                dispatch(fetchCommentsSuccess(localResponse))
            })
            .catch(error => dispatch(fetchCommentsFail(error)))
    }
};