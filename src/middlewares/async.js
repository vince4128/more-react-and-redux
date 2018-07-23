/*export default function({ dispatch }){
    return function(next){
        return function(action){

        }
    }
}*/

export default ({ dispatch }) => next => action => {
    // Check to see if the action has a promise on its 'payload' property
    // If it does, then wait for it to resolve
    // If it doesn't, then send the action on to the next middleware
    if(!action.payload || !action.payload.then){
        return next(action);
    }

    // we want to wait for the promise to resolve
    // (get its data!!) and then create a new action
    // with that data and dispatch it
    action.payload.then(function(response){
        const newAction = {...action, payload: response}; //override the payload with thedata from the response
        dispatch(newAction); //send the newAction through to all the middleware and then to the reducers
    });
};