import React from 'react';
import ReactDOM from 'react-dom';

//Style sheet
import './index.css';

//Components
import CounterComponentApp from './CounterComponentApp.js';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterComponentApp counter_value = {0} />, divRoot);