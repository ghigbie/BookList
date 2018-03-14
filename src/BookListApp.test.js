import React from 'react';
import ReactDOM from 'react-dom';
import BookListApp from './BookListApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookListApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
