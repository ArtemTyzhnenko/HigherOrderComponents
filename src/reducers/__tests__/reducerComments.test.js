import reducerComments from '../comments/reducerComments';
import { SAVE_COMMENT } from '../comments/actionTypes';

it('handles actions of type SAVE_COMMENT', ()=>{
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment',
    };

    let initialState = {
        comments: [],
    };

    const newState = reducerComments(initialState, action);

    expect(newState).toEqual({comments:['New Comment']});
});

it('handles actions with unknown type', ()=>{
    let initialState = {
        comments: [],
    };
    const newState = reducerComments(initialState, {});

    expect(newState).toEqual({ comments: [] });
});