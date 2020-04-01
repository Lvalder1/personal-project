import React, { Component } from  'react';
import styles from "./Navbar.module.scss";
import Navitem from "./Navitem";


const navItems = {
    Home: "login",
    Beers: "private/beerinfo",
    YourBar: "private/mybeers",
    
};

export default class Navbar extends Component {
    state = {
        navItems,
    };

get links() {
    return Object.entries(this.state.navItems).map((item, index) => {
        return (
            <Navitem
                name={item[0]}
                path={item[1]}
                key={index}
            />
        );
    });
}

  render () {
    return (
      <main className={styles.navbar}>
           <h1>Navbar</h1> 
           <div className={styles.menu}>
                <ul className={styles.links}>{this.links}</ul>
            </div>
      </main>
    )
  }

}