import React from 'react';
import  { mount } from 'enzyme';
import Root from '../../Root';
import CommentBoxContainer from '../../containers/CommentBoxContainer/CommentBoxContainer';

let wrapped;

beforeEach(()=> {
    wrapped = mount(
        <Root>
            <CommentBoxContainer />
        </Root>
    );
});

afterEach(()=> {
    wrapped.unmount();
});

it('has a text area and a two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', ()=>{

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target:{ value: 'New comment!'}
        });
        wrapped.update();
    });
    afterEach(()=> {
        wrapped.unmount();
    });

    it('has a text area that users can type in', ()=> {
        expect(wrapped.find('textarea').prop('value')).toEqual('New comment!');
    });

    it('when form is submitting, text area get emptied', ()=>{
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})

