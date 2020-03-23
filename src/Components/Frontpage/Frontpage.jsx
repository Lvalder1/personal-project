import React, { Component } from  'react';
import styles from "./Frontpage.module.scss";




export default class Frontpage extends Component {
  render () {
    return (
      <main className={styles.frontpage}>
           <h1>Front Page</h1>
      </main>
    )
  }

}