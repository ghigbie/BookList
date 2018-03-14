import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookListApp from './BookListApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BookListApp />, document.getElementById('react-container'));
registerServiceWorker();
