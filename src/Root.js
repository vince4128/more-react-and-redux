import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
    return(
        <Provider store={createStore(reducers, initialState)}>
            {children}
            {/* props.children allow to take a component and use it to wrap other components */}
            {/* so by using it into index.js it's like <App/> was wrapped here */}
        </Provider>
    )
}