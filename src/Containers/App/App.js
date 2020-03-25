import React, { Component } from  'react';
import Navbar from "../../Components/Navbar";
import Routes from '../../Routes/Routes';
import styles from "./App.module.scss"

export default class App extends Component {
  render () {
    return (
      <section className={styles.app}>
        <Navbar />
        <Routes />
      </section>
    )
  }

}


