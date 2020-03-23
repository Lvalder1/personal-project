import React, { Component } from  'react';
import styles from "./Main.module.scss";




export default class Main extends Component {
  render () {
    return (
      <main className={styles.header}>
           <h1>Main Section</h1>
      </main>
    )
  }

}