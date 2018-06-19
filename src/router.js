// Custom router for app
import React from 'react';
import types from 'prop-types';

const { Provider, Consumer } = React.createContext();

/**
 * @export
 * @class Router
 * @extends {React.Component}
 * Uses Context.Provider to pass value to all children
 */
export class Router extends React.Component {
    constructor() {
        super();
        // initial value to pass to context consumers
        this.state = {
            path: '',
            goTo: this.goTo
        };
    }
    goTo = (path) => {
        // sets state based on argument. Used to move between components
        this.setState({
            path
        });
    };
    render() {
        // use provider to send state to all context consumer
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

/**
 * @export
 * @param {*} { Component, path }
 * @returns Consumer.Context<Component>
 */
export function Route({ Component, path }) {
    return (
        <Consumer>
            {(value) => path === value.path && <Component goTo={value.goTo} />}
        </Consumer>
    );
}

Router.propTypes = {
    children: types.any
};

Route.propTypes = {
    Component: types.func,
    path: types.string
};
