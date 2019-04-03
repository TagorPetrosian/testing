import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

/*
 *  When we use mount from enzyme library we should clean up our
 *  components with unmount to prevent collision
 */
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
