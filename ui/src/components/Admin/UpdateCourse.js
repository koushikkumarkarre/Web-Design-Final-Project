import react from "react";
import "./UpdateCourse.scss";
import UpdateCourseComponent from './UpdateCourseComponent';
// Admin Page Update Component
class UpdateCourse extends react.Component {
  constructor() {
    super();
    this.state = {
      coursesData: [],
    };
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

  updateCourse= id => event =>  {
    event.preventDefault();
    
    let requestHeaders = {
      method: 'PUT'
    };
    
    fetch('http://localhost:3002/courses/' + id, requestHeaders)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      alert(data.message);
      window.location.reload();
    })
    .catch(error => alert("Cannot update Course item ", error));
  
  }

  render() {
    const singleCourseComponents = this.state.coursesData.map((course) => (
      <UpdateCourseComponent key={course._id} course={course}></UpdateCourseComponent>
    ));

    return (
      <div>
        <header class="update-allcourses">
          <div class="update-text-bo">
            <h1 class="update-heading-primary">
              <span class="update-heading-primary-sub">
                Update Course Roster
              </span>
            </h1>
          </div>
        </header>
        <section class="update-section-tours" id="section-tours">
          <div class="update-u-center-text u-margin-bottom-big">
            <h2 class="update-heading-secondary-catalog">Catalog</h2>
            <div className="update-flexbox">{singleCourseComponents}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default UpdateCourse;