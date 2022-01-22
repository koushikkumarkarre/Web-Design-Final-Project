import react from "react";
import "./DeleteCourse.scss";
import SingleCourseCard from "./SingleCourseCard";
// Admin Delete Course Functionality
class DeleteCourse extends react.Component {
  constructor() {
    super();
    this.state = {
      coursesData: [],
    };
  }

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
  }  

  render() {
    const singleCourseComponents = this.state.coursesData.map((course) => (
      <SingleCourseCard key={course._id} course={course}></SingleCourseCard>
    ));

    return (
      <div>
        <header class="allcourses">
          <div class="text-bo">
            <h1 class="deletec-heading-primary">
              {/* <span class="heading-primary-main">Dashboard</span><br /> */}
              <span class="heading-primary-sub">
                Delete Course Roster
              </span>
            </h1>
          </div>
        </header>
        <section class="section-tours-delete" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary-catalog">Catalog</h2>
            <div className="flexbox">{singleCourseComponents}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default DeleteCourse;