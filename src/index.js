import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import smoothscroll from 'smoothscroll-polyfill';

import App from './App';

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
