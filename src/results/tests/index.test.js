import React from 'react';
import { shallow } from 'enzyme';
import { Results } from '../index';
import { Body } from '../body';
import { ShowResult } from '../show-result';

describe('results unit tests', () => {
    it('renders correctly', () => {
        const props = {
            user_answers: {
                score: 0,
                all_answers: []
            }
        };
        const wrapper = shallow(<Results {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders body correctly', () => {
        const playAgain = jest.fn();
        const wrapper = shallow(<Body score={0} answers={[]} playAgain={playAgain} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('calls play again when button is click', () => {
        const playAgain = jest.fn();
        const wrapper = shallow(<Body score={0} answers={[]} playAgain={playAgain} />);
        wrapper.find('.btn').simulate('click');
        expect(playAgain).toBeCalled();
    });

    it('renders show results', () => {
        const wrapper = shallow(<ShowResult resultType="Failed" question="Fake string" />);
        expect(wrapper).toMatchSnapshot();
    });
});
