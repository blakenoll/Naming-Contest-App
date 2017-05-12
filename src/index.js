import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';


import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
