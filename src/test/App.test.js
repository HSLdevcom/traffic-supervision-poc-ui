import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

// needed for openlayers
global.requestAnimationFrame = function(){};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
