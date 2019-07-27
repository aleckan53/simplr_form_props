import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { FormProvider } from 'context/FormContext';

const tree = (
  <FormProvider>
    <App/>
  </FormProvider>
);
 
ReactDOM.render(tree, document.getElementById('root'));
