import React from 'react';
import  { mount } from 'enzyme';
import CommentBox from '../CommentBox/CommentBox';

let wrapped;

beforeEach(()=> {
    wrapped = mount(<CommentBox/>);
});

afterEach(()=> {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', ()=>{

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target:{ value: 'New comment!'}
        });
        wrapped.update();
    });


    it('has a text area that users can type in', ()=> {
        expect(wrapped.find('textarea').prop('value')).toEqual('New comment!');
    });

    it('when form is submitting, text area get emptied', ()=>{
        wrapped.find('button').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})

