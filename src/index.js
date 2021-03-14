import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mymessage from './Mymessage';
import Feed from './Feed';
import Team from './Team';
import Advert from './Advert';
import Contactform from './Contactform';
import Restaurant from './Restaurant';
// if export default us not used => import {Mymessage}from './Mymessage';
import reportWebVitals from './reportWebVitals';

//JSX syntax
//const content = <h2>Welcome on Board</h2>;
//const content = React.createElement('h2',{id:'first'},' news post here');
let user = "Sam";
const update = React.createElement('h2',{id:'update'},' updated');
const feed = <h3 className='alert alert-danger'>you have {update}.. {5+16} times mr {user} </h3>;
const advert = (<div><input className='mt-3'type='text'name='username'></input><br></br>
          <button type="button"onClick="alert('hello');" className='btn mt-4 btn-primary'>Signup</button></div>)
const tag =(<div><h2>heading</h2><p>my first heading</p></div>);
// ReactDOM.render(
//     content,document.getElementById('root')
// );

let student_scores = {maths:45,english:50}
ReactDOM.render(
  <Mymessage scores= {student_scores} age='29' />,document.getElementById('first')
);
ReactDOM.render(
  <Advert />,document.getElementById('first')
);
// ReactDOM.render(
//   <Team />,document.getElementById('root')
//);

// ReactDOM.render(
//   <Feed/>,document.getElementById('update')
// );
ReactDOM.render(
  <Restaurant />,document.getElementById('update')
);
ReactDOM.render(
  <Contactform />,document.getElementById('contact')
);
// ReactDOM.render(
//   advert,document.getElementById('feeds')
// );
// ReactDOM.render(
//   advert,document.getElementById('first')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
