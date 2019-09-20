import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
