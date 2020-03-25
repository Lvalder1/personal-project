import React, { Component } from  'react';
import styles from "./Header.module.scss";
import Navbar from '../Navbar';



export default class Header extends Component {
  render () {
    return (
      <main className={styles.header}>
      <h1>{this.props.text}</h1>
      </main>
    )
  }

}