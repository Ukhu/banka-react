import React from 'react';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer component <Footer />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Footer />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the footer tag', () => {
    const wrapper = mount(
      <Footer />,
    );

    expect(wrapper.find('footer')).toHaveLength(1);
  });

  it('has a paragraph with correct text', () => {
    const wrapper = mount(
      <Footer />,
    );

    const footerParagraph = 'Banka, Copyright © 2019';

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').get(0).props.children).toEqual(footerParagraph);
  });
});
