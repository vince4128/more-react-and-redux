import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return(
        <Provider store={store}>
            {children}
            {/* props.children allow to take a component and use it to wrap other components */}
            {/* so by using it into index.js it's like <App/> was wrapped here */}
        </Provider>
    )
}