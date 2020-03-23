import React, { Component } from  'react';
import styles from "./Header.module.scss";
import Navbar from '../Navbar';



export default class Header extends Component {
  render () {
    return (
      <main className={styles.header}>
           <h1>Louis's Beers</h1>
      </main>
    )
  }

}