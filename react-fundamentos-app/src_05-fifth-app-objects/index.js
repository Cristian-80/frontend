import React from 'react';
import ReactDOM from 'react-dom';

//Style sheet
import './index.css';

//Components
import ComponentApp from './ComponentApp.js';

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponentApp/>, divRoot);