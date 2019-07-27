import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let root;

  beforeEach(() => {
    root = document.createElement('div');
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(root);
  })

  it('renders without crashing', () => {
    ReactDOM.render(<Button />, root);
  });
  
  it('matches snapshot', () => {
    ReactDOM.render(<Button />, root);
    expect(root).toMatchSnapshot();
  });

  it('renders props correctly', () => {
    const wrapper = mount(<Button disabled={true} name='Test' type='submit'/>);
    const btn = wrapper.find('button');

    expect(btn.prop('disabled')).toBeTruthy();
    expect(btn.prop('type')).toBe('submit');
    expect(btn.text()).toBe('Test');
  });
});