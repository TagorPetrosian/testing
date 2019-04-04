import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {/* props.children is a react construct it allows to take the component we just created and use it to wrap other components */}
      {children}
    </Provider>
  );
};
