import { saveComment } from '../comments/actions';
import { SAVE_COMMENT} from "../comments/actionTypes";

describe('saveComment', ()=> {
    it('has the correct type', ()=> {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', ()=> {
        const action = saveComment('New comment');

        expect(action.payload).toEqual('New comment');
    });
});