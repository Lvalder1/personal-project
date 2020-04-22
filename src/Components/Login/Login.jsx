import React, { Component } from "react";
import styles from "./Login.module.scss";
import Header from "../Header";

export default class Login extends Component {
    render() {
        return (
            <section>
                <Header text={"Sign In With Your Google Account "} />
                <div className={styles.google}>
                    <button onClick={this.props.signIn}>Sign in with google</button>
                </div>
                <div className={styles.login}></div>
            </section>
        );
    }
}