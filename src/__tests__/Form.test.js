import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);  
  });

  it('matches snapshot', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Form />, root);
    expect(root).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(root);
  });
});