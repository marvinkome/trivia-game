import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../app';

describe('App tests', () => {
    it('renders correctly', () => {
        const app = shallow(<App />);
        expect(app).toMatchSnapshot();
    });
});
