import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BodyAgeCalculator } from './BodyAgeCalculator';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<BodyAgeCalculator />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BodyAgeCalculator />)
    });

    it('Should render q1 when questionIndex is 0.', () => {
        wrapper.setProps({
            questionIndex: 0
        });
        expect(wrapper.find({ type: 'date' })).toHaveLength(1);
    });

    it('Should render q2 when questionIndex is 1.', () => {
        wrapper.setProps({
            questionIndex: 1
        });
        expect(wrapper.contains('Do you workout weekly?')).toEqual(true);
    });

    it('Should render q3 when questionIndex is 2.', () => {
        wrapper.setProps({
            questionIndex: 2
        });
        expect(wrapper.contains('Do you eat junk food?')).toEqual(true);
    });

    it('Should render q4 when questionIndex is 3.', () => {
        wrapper.setProps({
            questionIndex: 3
        });
        expect(wrapper.contains('Can you touch your toes?')).toEqual(true);
    });
});