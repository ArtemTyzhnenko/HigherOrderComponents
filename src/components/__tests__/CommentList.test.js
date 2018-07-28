import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList/CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList comments={ ['Comment 1', 'Comment 2'] }/>
        </Root>
    )
});

it('creates one LI per comment', ()=> {
    expect(wrapped.find('li').length).toEqual(2);
});

it('show the text from each comment', ()=> {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});