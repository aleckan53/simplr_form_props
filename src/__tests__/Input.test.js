import React from 'react';
import { mount } from 'enzyme';
import Input from '../components/Input';
import toJson from 'enzyme-to-json';

describe('Input', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches snapshot', () => {
    wrapper = mount(<Input/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders props correctly', () => {
    wrapper = mount(
      <Input 
        label='Test' 
        id='testId' 
        type='text' 
        hint='testHint'/>
    );

    const input = wrapper.find('input');
    const label = wrapper.find('label');
    const hint = label.find('span');
    const invalidMsg = wrapper.find('.invalidMsg').find('p');

    expect(hint.text()).toBe('testHint');
    expect(label.text()).toBe('Test testHint');
    expect(input.prop('type')).toBe('text');
    expect(label.prop('htmlFor')).toBe('testId');
    expect(input.prop('id')).toBe('testId');
    expect(invalidMsg.text()).toBeFalsy();
  });

  it('doesn\'t render validation msg if type="checkbox"', () => {
    wrapper = mount(<Input type='checkbox'/>);
    expect(wrapper.children()).not.toContain('.invalidMsg');
  });

  it('renders children if given', () => {
    wrapper = mount(<Input><h1>Test</h1></Input>);
    const testDiv = wrapper.find('h1');

    expect(testDiv.text()).toBe('Test');
  });
});