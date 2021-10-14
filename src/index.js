import React from 'react';
import ReactDOM from 'react-dom';
//import Car from './App';
import Navbar from './navbar'
import Skill from './skills'
import Join from './join';

//const element=<h1>Hello World</h1>;
//console.log(element);
//ReactDOM.render(element,document.getElementById('rot'));
ReactDOM.render(<Navbar/>,document.getElementById('rot'));
ReactDOM.render(<Skill/>,document.getElementById('skills'));
ReactDOM.render(<Join/>,document.getElementById('join'));