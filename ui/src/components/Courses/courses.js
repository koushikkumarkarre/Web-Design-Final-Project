import react from "react";
import "./courses.scss";
import SingleCourseCard from "./singleCourseCard";
import MySingleCourseCard from "./mySingleCourse";

class Courses extends react.Component {
  constructor() {
    super();
    this.state = {
      coursesData: [],
      myCourses: []
    };
  }
//checking authentication
  isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }

    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
  }

  componentWillMount() {
    fetch("http://localhost:3002/courses")
      .then((response) => response.json())
      .then((data) => {
        // storing todo data from API to the state variable
        this.setState({
          coursesData: data,
        });
      });
//Fetching the authenticated user
    fetch(`http://localhost:3002/users/${this.isAuthenticated().user._id}`)
      .then((response) => response.json())
      .then((data) => {
        // storing todo data from API to the state variable
        data.course.map((courseId) => (
          fetch(`http://localhost:3002/courses/${courseId}`)
          .then((response) => response.json())
          .then((course) => {
            this.setState({
              myCourses: this.state.myCourses.concat([course]),
            });
          })
        ));
      });
  }

  render() {
    
    const singleCourseComponents = this.state.coursesData.map((course) => (
      <SingleCourseCard key={course._id} course={course} style={`rgb(194, 50, 50)`}></SingleCourseCard>
    ));

    const myCourseComponents = this.state.myCourses.map((course) => (
      <MySingleCourseCard key={course._id} course={course} style={`#333`}></MySingleCourseCard>
    ));
//HTML for courses
    return (
      <div>
        <header class="allcourses">
          <div class="text-bo">
            <h1 class="course-heading-primary">
              <span class="heading-primary-main">Dashboard</span><br />
              <span class="heading-primary-sub">
                Browse through our selection of courses below
              </span>
            </h1>
          </div>
        </header>
        <section class="section-tours" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary-catalog">Catalog</h2>
            <div className="flexbox">{singleCourseComponents}</div>
          </div>
          <div className="spacer">
            <h1 className="spacerText">.</h1>
          </div>
          <div className="myCourses">
            <h1 className="heading-secondary-catalog">My Courses</h1>
            <div className="flexbox-myCourses">{myCourseComponents}</div>
          </div>          
        </section>
      </div>
    );
  }
}

export default Courses;