import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBoxContainer from '../../containers/CommentBoxContainer/CommentBoxContainer';
import CommentList from '../CommentList/CommentList';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App/>);
});

it('show a comment box', () => {

    expect(wrapped.find(CommentBoxContainer).length).toEqual(1);
});

it('show a comment list', () => {

    expect(wrapped.find(CommentList).length).toEqual(1);
});