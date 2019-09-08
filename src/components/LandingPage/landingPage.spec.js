import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';

configure({ adapter: new Adapter() });

describe('LandingPage component <LandingPage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LandingPage />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the header and footer components', () => {
    const wrapper = shallow(
      <LandingPage />,
    );

    expect(wrapper.find('UnauthenticatedHeader')).toHaveLength(1);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('has two buttons', () => {
    const wrapper = shallow(
      <LandingPage />,
    );

    expect(wrapper.find('button')).toHaveLength(2);
  });
});
