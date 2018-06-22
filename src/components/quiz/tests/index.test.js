import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../index';
import Body from '../body';
import { QuizCard } from '../quiz-card';
import data from './resp.json';

describe('quiz page tests', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('renders correctly', () => {
        // mock the questions data result
        fetch.mockResponseOnce(JSON.stringify(data));
        const props = {
            quiz: { results: [] },
            setupQuiz: jest.fn(),
            goTo: jest.fn()
        };
        const wrapper = shallow(<Quiz {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('fetch with error', () => {
        // fetch should return error
        fetch.mockReject(new Error('This is a fake error for test'));
        const props = {
            quiz: { results: [] },
            dispatch: jest.fn(),
            goTo: jest.fn()
        };
        const wrapper = shallow(<Quiz {...props} />);

        process.nextTick(() => {
            wrapper.update();
            expect(wrapper.state('error')).toBe(true);
        });
    });

    const onAnswer = jest.fn();
    const showResults = jest.fn();

    it('renders body correctly', () => {
        const body = shallow(
            <Body
                quiz={[]}
                onAnswer={onAnswer}
                showResults={showResults}
                error={false}
                showLoading
            />
        );
        expect(body).toMatchSnapshot();
    });

    it('call onAnswer when answer is selected', () => {
        const body = shallow(
            <Body
                quiz={data.results}
                onAnswer={onAnswer}
                showResults={showResults}
                error={false}
                showLoading={false}
            />
        );

        body.find('#select-true').simulate('click', {
            preventDefault: jest.fn()
        });

        expect(onAnswer).toBeCalled();
    });

    it('changes route after all questions have been answered', () => {
        const body = shallow(
            <Body
                quiz={data.results}
                onAnswer={onAnswer}
                showResults={showResults}
                error={false}
                showLoading={false}
            />
        );

        body.setState({ currentQuestionIndex: 9 });
        body.find('#select-false').simulate('click', {
            preventDefault: jest.fn()
        });

        expect(showResults).toBeCalled();
    });

    it('renders quiz card correctly', () => {
        const wrapper = shallow(<QuizCard item={data.results[0]} currentInd={1} length={2} />);
        expect(wrapper).toMatchSnapshot();
    });
});
