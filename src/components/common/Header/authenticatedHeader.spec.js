import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import AuthenticatedHeader from './AuthenticatedHeader';

configure({ adapter: new Adapter() });

describe('Authenticated Header component <Authenticated />', () => {
  const user = 'John';
  const link = 'dashboard';

  it('renders correctly', () => {
    const wrapper = shallow(
      <AuthenticatedHeader user={user} link={link} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the header tag', () => {
    const wrapper = shallow(
      <AuthenticatedHeader user={user} link={link} />,
    );

    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('has 2 links', () => {
    const wrapper = shallow(
      <AuthenticatedHeader user={user} link={link} />,
    );

    expect(wrapper.find('Link')).toHaveLength(2);
  });
});
