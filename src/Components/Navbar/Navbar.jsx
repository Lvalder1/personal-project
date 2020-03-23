import React, { Component } from  'react';
import styles from "./Navbar.module.scss";



export default class Navbar extends Component {
  render () {
    return (
      <main className={styles.navbar}>
           <h1>Navbar</h1>
      </main>
    )
  }

}