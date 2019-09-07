import React from 'react';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';

configure({ adapter: new Adapter() });

describe('LandingPage component <LandingPage />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <LandingPage />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the h1 component', () => {
    const wrapper = mount(
      <LandingPage />,
    );

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
