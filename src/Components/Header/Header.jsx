import React, { Component } from  'react';
import styles from "./Header.module.scss";



export default class Header extends Component {
  render () {
    return (
      <section className={styles.header}>
      <h1>{this.props.text}</h1>
      </section>
    )
  }

}