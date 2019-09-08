import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import UnauthenticatedHeader from './UnauthenticatedHeader';

configure({ adapter: new Adapter() });

describe('Unauthenticated Header component <Unauthenticated />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <UnauthenticatedHeader />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the header tag', () => {
    const wrapper = shallow(
      <UnauthenticatedHeader />,
    );

    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('has 3 links', () => {
    const wrapper = shallow(
      <UnauthenticatedHeader />,
    );

    expect(wrapper.find('p')).toHaveLength(2);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
