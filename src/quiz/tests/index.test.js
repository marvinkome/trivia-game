import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../index';
import Body from '../body';

describe('quiz page tests', () => {
    it('renders correctly', () => {
        const props = {
            quiz: {
                results: []
            }
        };
        const wrapper = shallow(<Quiz {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders body correctly', () => {
        const wrapper = shallow(<Body quiz={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
