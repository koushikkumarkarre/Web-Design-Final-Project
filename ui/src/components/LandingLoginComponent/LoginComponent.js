import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import './LandingComponent.scss';

//This code is to access the login component to sign in to the application
class LoginComponent extends React.Component {

    constructor() {

        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer: false
        };
    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };

    authenticate = (jwt, next) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("jwt", JSON.stringify(jwt))
            next();
        }
    }

    clickSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = await this.state;
        const user = {
            email,
            password
        };
        
        this.signin(user)
        .then(data => {
            if (data.error) {
                this.setState({ error: data.error })
            }
            else {
                this.authenticate(data, () => {
                    this.setState({ redirectToReferer: true })
                })
            }
        });
    }

    signin = async (user) => {
        return fetch("http://localhost:3002/auth/signin", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(response => {
                    return response.json();
                })
                .catch(err => console.log(err));
    }

    render() {
        const { email, password, error, redirectToReferer } = this.state;

        if (redirectToReferer) {
            return <Redirect to="/courses"></Redirect>
        }

        return (
            <section className="section-login">
                <div className="login">
                    <div className="login_form">
                        <form action="#" className="form" onSubmit={this.clickSubmit} >
                            <h3 className="signin-heading-secondary-login">
                                Login
                            </h3>
                            <div className="signin_form_group">
                                <div className="signin_form_input_error" style={{ display: error ? "" : "none" }}>
                                    {error}
                                </div>
                                <br></br>

                                <input type="email" className="signin_form_input" placeholder="Email" id="email" required value={email} onChange={this.handleChange("email")} />
                                <label for="email" className="signin_form_label">
                                    Email
                                </label>
                                <br />
                                <input type="password" className="signin_form_input" placeholder="Password" id="password" required value={password} onChange={this.handleChange("password")} />
                                <label for="password" className="signin_form_label">
                                    Password
                                </label>
                                <br />
                                <button type="submit" className="signin-btn-login">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginComponent;