import React from 'react';
import ReactDOM from 'react-dom';

//Style sheet
import './index.css';

//Components
import EventComponentApp from './EventComponentApp.js';

const divRoot = document.querySelector('#root');

ReactDOM.render(<EventComponentApp parm_1="Cristian" parm_2="Colombia"/>, divRoot);