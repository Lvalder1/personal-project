import React, { Component } from  'react';
import styles from "./Navitem.module.scss";
import { Link } from "@reach/router";



export default class Navitem extends Component {
  render () {
    return (
        <p className={styles.navitem}>
        <Link to={this.props.path}>
            {this.props.name}
        </Link>
    </p>
    )}
}