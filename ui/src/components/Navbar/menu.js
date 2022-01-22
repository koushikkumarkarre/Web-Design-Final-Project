import react from 'react';
import { Link, withRouter } from 'react-router-dom';
import './menu.scss';
import Home from '../Home/Home';

//This code holds the functionality to route the nav bar and its functionalities

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "red" }
    else return { color: "white" }
}

const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }

    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}


export const signout = (next) => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt")
    next()
    return fetch("http://localhost:3002/auth/signout", {
        mehtod: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs primary">
            <li className="fav">
               <a href="/"><img className="nuimage" alt="Nuflex" src="NU.png" /></a>
            </li>
            <li className="nav-item flex">
                NU Flex
            </li>
        
            {/* <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                </Link>
            </li> */}

            {!isAuthenticated() && (
                <react.Fragment>
                    <li className="nav-item">
                        {/* <Link className="nav-link" style={isActive(history, '/signin')} to="/signin"> */}
                        <a className="signIn" href="#loginComponent">Sign In</a>
                        {/* </Link> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
                        <button className="btn-signup">Sign Up</button>
                        
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/courses')} to="/courses">
                            Courses
                        </Link>
                    </li>
                </react.Fragment>
            )}
        
            {isAuthenticated() && isAuthenticated().user.role === `admin` && (
                <react.Fragment>
                <li className="nav-item">
                    <Link to={`/courses`} style={isActive(history, `/admin`)} className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/admin`} style={isActive(history, `/admin`)} className="nav-link">
                        Manage Courses
                    </Link>
                </li>
                <li className="nav-item">
                <span
                    className="nav-link"
                    style={{ cursor: 'pointer'}}
                    onClick={() => signout(() => history.push('/'))}
                >
                    Sign Out
                </span>
                </li>
                </react.Fragment>   
            )}

            {isAuthenticated() && isAuthenticated().user.role === `user` && (
                <react.Fragment>
                    <li className="nav-item">
                        <Link
                            to={`/user/${isAuthenticated().user._id}`}
                            style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                            className="nav-link"
                        >
                            {`${isAuthenticated().user.name}`}
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/courses')} to="/courses">
                            Courses
                        </Link>
                    </li>

                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer'}}
                            onClick={() => signout(() => history.push('/'))}
                        >
                            Sign Out
                        </span>
                    </li>
                </react.Fragment>
            )}
        </ul>  
    </div>   
)

export default withRouter(Menu);