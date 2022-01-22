import react from 'react';
// import Header from "../Header/Header";
import Main from "../Main/Main";
// import Instructors from "../Instructors/Instructors";
import LoginComponent from "../LandingLoginComponent/LoginComponent.js";
import Footer from "../Footer/Footer";
import Signup from '../Signup/Signup.js';


class Home extends react.Component {

    render() {
//This is a wrapper component for main, login component, footer
        return (
            <div>
                <Main />
                <section id="loginComponent">
                    <LoginComponent />
                </section>
                <Footer />
                {/* <Signup /> */}
            </div>
        )
    }
}

export default Home;
