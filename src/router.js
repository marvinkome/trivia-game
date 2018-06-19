import React from 'react';
import types from 'prop-types';

const { Provider, Consumer } = React.createContext();

export class Router extends React.Component {
    constructor() {
        super();
        this.state = {
            path: '',
            goTo: this.goTo
        };
    }
    goTo = (path) => {
        this.setState({
            path
        });
    };
    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

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
