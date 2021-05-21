import React from 'react';
import ReactDOM from 'react-dom';

//Style sheet
import './index.css';

//Components
import ComponentApp from './ComponentApp.js';

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponentApp parm_1="Cristian" parm_2="Colombia" parm_3="This is a parameter"/>, divRoot);