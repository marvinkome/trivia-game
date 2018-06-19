import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../index';
import Body from '../body';

describe('quiz page tests', () => {
    it('renders correctly', () => {
        const props = {
            quiz: { results: [] },
            dispatch: jest.fn(),
            goTo: jest.fn()
        };
        const wrapper = shallow(<Quiz {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    const onAnswer = jest.fn();
    const showResults = jest.fn();

    const body = shallow(
        <Body quiz={[]} onAnswer={onAnswer} showResults={showResults} />
    );

    it('renders body correctly', () => {
        expect(body).toMatchSnapshot();
    });
});
