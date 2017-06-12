import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/layout/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//import OLXNavbar from './components/navbar/OLXNavbar';

class App extends React.Component{
  constructor(){
    super();
    console.log("App:constructor()");
  }

  render(){
    return(
      <div>
        <Home/>
      </div>
    );
  }
}
//ReactDOM.render(<OLXNavbar/>, document.getElementById('olxNavbar'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
