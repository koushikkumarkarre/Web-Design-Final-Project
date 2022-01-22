import React, { useState } from "react";
import "./Signup.scss";
import PasswordStrengthBar from 'react-password-strength-bar';

// This code holds the Functionality of Admin Signup Page that can be called by /adminSignup

class AdminSignup extends React.Component {

    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            role: "admin",
            error: "",
            open: false
        };
    }

    handleChange = name => event => {
        this.setState({ error: "" }) 
        if (name ==='fname')
            this.setState({ [name]: event.target.value });
        else
            this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        const { fname,lname, email, password, role } = this.state;
        const name = fname+' '+lname
        const user = {
            name,
            email,
            password,
            role
        };
        // console.log(user);
        this.signup(user)
            .then(data => {
                if (data.error) this.setState({ error: data.error })
                else this.setState({
                    error: "",
                    fname: "",
                    lname: "",
                    email: "",
                    password: "",
                    open: true
                })
            })

    };

    signup = user => {
        return fetch("http://localhost:3002/auth/signup", {
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
        const { fname, lname,email, password, error, open } = this.state;

        return (

          
            <section className="su_container">
                <div className="su_subContainer">
                    <div >
                    <span className="admin-heading">
                                    ADMIN SIGNUP
                                   
                                </span>
                        <div >
                            <form action="#"  onSubmit={this.clickSubmit} >
                                
                                
                                <div>
                                    <div
                                    
                                        style={{ display: error ? "" : "none" }}
                                    >
                                        {error}
                                    </div>
                                    <br></br>
                                    <div
                                       
                                        style={{ display: open ? "" : "none" }}
                                    >
                                        New Admin account is successfully created. Please Sign In.
                                    </div>
                                </div>
                                <div className="su_flexBox">

                                <div >
                                    
                                    <input className="su_formInput"

                                        type="text"
                                        
                                        placeholder="First Name"
                                        id="fName"
                                        required
                                        value={fname}
                                        name="fname"
                                        onChange={this.handleChange("fname")}
                                    ></input>
                                    <label className="su_class" for="fName" >
                                        First Name
                                    </label>
                                    <br></br>

                                    <input className="su_formInput"

                                        type="text"
                                        
                                        placeholder="Last Name"
                                        id="lName"
                                        required
                                        value={lname}
                                        name="lname"
                                        onChange={this.handleChange("lname")}
                                    ></input>
                                    <label className="su_class" for="lName">
                                        Last Name
                                    </label>
                                    <br></br>

                                    <input className="su_formInput"
                                        type="email"
                                        
                                        placeholder="Email"
                                        id="email"
                                        required
                                        value={email}
                                        name = "email"
                                        onChange={this.handleChange("email")}
                                    ></input>
                                    <label className="su_class" for="email" >
                                        Email
                                    </label>
                                    <br></br>

                                    < input className="su_formInput"
                                        
                                        placeholder="Password"
                                        id="password"
                                        type="password"
                                        required
                                        value= {password} 
                                        onChange={this.handleChange("password")}
                                    ></input>
                                    <label className="su_class" for="password" >
                                        Password
                                    </label>
                                    
                                    <PasswordStrengthBar className="bar" password={password} style={{height:'1%'}}/>
                                    {/* <label for="password" className="form_label">
                                        Create Password
                                    </label> */}

                                    <button className="su-btn" >SignUp</button>
                           

                                </div>
                                <div >
                                <img  alt="signupImage" id="su_img" src="R.jpg" />
                                </div>

                                </div>
                                
                                
                                <div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}


export default AdminSignup;