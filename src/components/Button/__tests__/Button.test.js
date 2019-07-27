import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('matches snapshot', () => {
    
  });

  it('renders props correctly', () => {

  });
});