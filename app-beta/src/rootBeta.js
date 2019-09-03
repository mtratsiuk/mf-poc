import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const renderApp = (id) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(id))
  ReactDOM.render(<App />, document.getElementById(id));
}
