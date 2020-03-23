import React, { Component } from  'react';
import Navbar from "../../Components/Navbar";
import Routes from '../../Routes/Routes';



export default class App extends Component {
  render () {
    return (
      <main>
        <Navbar />
        <Routes />
      </main>
    )
  }

}


