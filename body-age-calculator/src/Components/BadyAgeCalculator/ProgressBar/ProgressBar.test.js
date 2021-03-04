import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<ProgressBar />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProgressBar />)
    });

    it('Should render a progress bar with 0/4 when questionIndex is 0.', () => {
        wrapper.setProps({
            questionIndex: 0
        });
        expect(wrapper.contains(<progress value={0} max="4" data-label={0} />)).toEqual(true);
    });

    it('Should render a progress bar with 1/4 when questionIndex is 1.', () => {
        wrapper.setProps({
            questionIndex: 1
        });
        expect(wrapper.contains(<progress value={1} max="4" data-label={1} />)).toEqual(true);
    });

    it('Should render a progress bar with 2/4 when questionIndex is 2.', () => {
        wrapper.setProps({
            questionIndex: 2
        });
        expect(wrapper.contains(<progress value={2} max="4" data-label={2} />)).toEqual(true);
    });

    it('Should render a progress bar with 3/4 when questionIndex is 3.', () => {
        wrapper.setProps({
            questionIndex: 3
        });
        expect(wrapper.contains(<progress value={3} max="4" data-label={3} />)).toEqual(true);
    });

    it('Should render a progress bar with 4/4 when questionIndex is 4.', () => {
        wrapper.setProps({
            questionIndex: 4
        });
        expect(wrapper.contains(<progress value={4} max="4" data-label={4} />)).toEqual(true);
    });
});