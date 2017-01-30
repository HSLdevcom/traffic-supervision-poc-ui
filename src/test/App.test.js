import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

global.requestAnimationFrame = function(){};// mock for ol

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
