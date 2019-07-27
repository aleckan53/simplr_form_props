import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from '../Select';

describe('Select', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches snapshot', () => {
    wrapper = mount(<Select/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders first option as default', () => {
    wrapper = mount(<Select/>);
    const option = wrapper.find('select').childAt(0)

    expect(option.text()).toBe('Select your business');
  });
});