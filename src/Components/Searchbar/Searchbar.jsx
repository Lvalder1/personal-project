import React, { Component } from  'react';
import styles from "./Searchbar.module.scss";

export default class Searchbar extends Component {
  render () {
    return (
        <input
        className={styles.searchBar}
        placeholder='Search Beers ...'
        value={this.props.searchText}
        onChange={this.props.setSearchText}
    />
    )
  }

}