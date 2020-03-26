import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Beerinfo from "../Components/Main/Beerinfo";
import Frontpage from "../Components/Main/Frontpage";
import styles from "./Routes.module.scss";


const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    render() {
        return (
            <Router className={styles.routes}>
                <Redirect noThrow from="/" to="/frontpage" />
                <Beerinfo path="beerinfo" />
                <Frontpage path="frontpage" />
                <NotFound default />
            </Router>
        );
    }
}