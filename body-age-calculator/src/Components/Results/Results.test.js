import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Results } from './Results';

configure({ adapter: new Adapter() });

describe('<Results />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Results getResults={() => { }} results={[{
            id: '00000000001',
            name: 'Bob Tester',
            bodyAge: '50',
            date: '2020-02-26T15:15:56.124Z'
        }, {
            id: '00000000002',
            name: 'Bill Tester',
            bodyAge: '50',
            date: '2021-02-25T14:18:54.420Z'
        }
        ]} />)
    });

    it('Should render one table row for each result returned returned.', () => {
        wrapper.setState({
            gridFilter: 'all'
        })
        expect(wrapper.find('tbody tr')).toHaveLength(2);
    });

    it('Should render one table row for each result returned with a date withing the last week.', () => {
        wrapper.setState({
            gridFilter: 'recent'
        })
        expect(wrapper.find('tbody tr')).toHaveLength(1);
    });

    it('Should render one table row for each result returned with a date older than 1 week ago.', () => {
        wrapper.setState({
            gridFilter: 'older'
        })
        expect(wrapper.find('tbody tr')).toHaveLength(1);
    });
});