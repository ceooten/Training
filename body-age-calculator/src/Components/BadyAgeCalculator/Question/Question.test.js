import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from './Question';
import React from 'react';

configure({adapter: new Adapter()});

describe('<Question />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Question
            responses={[['Yes', -1], ['No', 1]]}>
            Can you touch your toes?
            </Question>);
    });

    it('Should render a radio button for each response given in props.', () => { 
        expect(wrapper.find({ type: 'radio' })).toHaveLength(2);
    });

    it('Should render a div containing the question text', () => {
        expect(wrapper.contains(<div className="QuestionText">Can you touch your toes?</div>)).toEqual(true);
    });
});