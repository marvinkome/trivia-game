import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';

describe('App tests', () => {
    const goTo = jest.fn();

    const app = shallow(<Home goTo={goTo} />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('calls goTo when button is clicked', () => {
        app.find('.btn').simulate('click', {
            preventDefault: jest.fn()
        });

        expect(goTo).toBeCalled();
    });
});
