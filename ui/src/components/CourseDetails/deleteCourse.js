import react from "react";
import "./DeleteCourse.scss";
import SingleCourseCard from "./SingleCourseCard";

class Courses extends react.Component {
  constructor() {
    super();
    this.state = {
      coursesData: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:9000/app/courses")
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
            <h1 class="heading-primary">
              <span class="heading-primary-main">ALL COURSES</span>
              <span class="heading-primary-sub">
                Choose a course to expand your knowledge
              </span>
            </h1>
          </div>
        </header>
        <section class="section-tours" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            {/* <h2 class="heading-secondary">ALL COURSES</h2> */}
          </div>
          <div className="flexbox">{singleCourseComponents}</div>

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn--green">
              Discover all courses
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Courses;
