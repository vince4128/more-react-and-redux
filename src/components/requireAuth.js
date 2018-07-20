import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        // Our component just got rendered
        componentDidMount(){
            this.shouldNavigateAway();
        }

        // Component receive a new set of props
        componentDidUpdate(){
            this.shouldNavigateAway();
        }

        shouldNavigateAway(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return <ChildComponent {...this.props} /> 
            /* {...this.props} take any props that were passed to our higher order component
                and just passes them straight down to the child's component of comment box
            */
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};