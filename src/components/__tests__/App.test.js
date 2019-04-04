import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommnetList from 'components/CommentList';

let wrapped;

//any logic within this function will be executed before each test
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List', () => {
  expect(wrapped.find(CommnetList).length).toEqual(1);
});
