import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('Should render one <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(1);
    });

    it('Should render three <NavigationItem /> elements if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('Should show a logout button if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem linkName='Logout' linkTo="/logout"/>)).toEqual(true);
    });

    it('Should show a results button if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem linkName='Results' linkTo="/results"/>)).toEqual(true);
    });

    it('Should show a home button if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem linkName='Home' linkTo='/' />)).toEqual(true);
    });

    it('Should show a login button if not authenticated', () => {
        expect(wrapper.contains(<NavigationItem linkName='Login' linkTo="/auth"/>)).toEqual(true);
    });
});