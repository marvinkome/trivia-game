import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';

describe('App tests', () => {
    it('renders correctly', () => {
        const app = shallow(<Home />);
        expect(app).toMatchSnapshot();
    });
});
