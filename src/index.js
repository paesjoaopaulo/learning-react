import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './components/Calculator';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
