import React from 'react';
import ReactDOM from 'react-dom';

//Style sheet
import './index.css';

const greeting = <h1>Hello from fundamentals-react-app</h1>

const divRoot = document.querySelector('#root');

ReactDOM.render(greeting, divRoot);