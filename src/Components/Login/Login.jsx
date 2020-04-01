import React, { Component } from "react";
import styles from "./Login.module.scss";
import Header from "../Header";

export default class Login extends Component {
    render() {
        return (
            <section>
                <Header text={"Sign In With Your Google Account "} />
                <div onClick={this.props.signIn} className={styles.google}>
                    <button>Sign in with google</button>
                </div>
            </section>
        );
    }
}