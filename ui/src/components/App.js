import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainRouter from './MainRouter'


function App() {
  return (
    <Router>
      <div>
        {/* <Header />
        <Main />
        <Instructors />
        <LoginComponent />
        <Signup />
        <Footer /> */}
        {/* <Login />
        <Signup /> */}
        <MainRouter></MainRouter>
        {/* <Login></Login> */}

      </div>
    </Router>

  );
}

export default App;
