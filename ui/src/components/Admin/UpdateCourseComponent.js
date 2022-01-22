import react from "react";
import "./DeleteCourse.scss";
import { Link } from "react-router-dom";
// Individual Update Course Cards
class UpdateCourseComponent extends react.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      headline: "",
      description: "",
      keyPoint: [],
      skill: [],
      instructor: [],
      redirect: false
    };
  }

  componentWillMount() {
    this.setState({ 
      title: this.props.course.title,
      headline: this.props.course.headline,
      description: this.props.course.description,
      keyPoint: this.props.course.keyPoint,
      skill: this.props.course.skill,
      instructor: this.props.course.instructor
    });
  } 

  handleChange = name => event => {
    this.setState({ error: "" }) 
    this.setState({ [name]: event.target.value });
  };

  // updateList = (id, which) => {
  //   let list = []
  //   let olist = this.props.course[which];
    
  //   for(let i=0; i<this.state[which].length; i++){
  //       if(!(olist[i] === this.state[which][i])) {
  //         delete(olist[i])
  //         list.push(this.state[which][i])  
  //       }
  //   }
  //   this.setState({
  //     [which]: olist+list
  //   });
  // } 
  
  updateCourse = id => event => {
    event.preventDefault();

    let course = {
      title: this.state.title,
      description: this.state.description,
      headline: this.state.headline
    }

    let requestHeaders = {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(course)
    };

    fetch('http://localhost:3002/courses/' + id, requestHeaders)
    .then(response => response.json())
    .then(data => {
      alert("Course updated!");
      this.setState({
        redirect: true
      })
      window.location.reload();
    })
    .catch(error => alert("Cannot Update Course: ", error));
  }  

  render() {

    let skills = this.props.course.skill.map((item) =>
      <li className="skillItem" key={item}>{item}</li>
    );
   
    let keyPoints = this.props.course.keyPoint.map((item) =>
      <li className="keyPointItem" key={item}>{item}</li>
    );

    let instructors = this.props.course.instructor.map((item) =>
      <li className="instructorItem" key={item}>{item}</li>
    );

    return (
      <div class="update-row">
        <div class="update-col-1-of-3">
          <div class="update-card">
            <div class="update-card__side update-card__side--front">
              <div class="update-card__picture update-card__picture--1">&nbsp;</div>
              <label className="update-label">Title:</label><br />
              <input type="text" className="update-input" value={this.state.title} onChange={this.handleChange("title")} />
              <br /><br />
              <label className="update-label">Description:</label><br />
              <input type="text" className="update-input" value={this.state.description} onChange={this.handleChange("description")} />
              <br /><br />
              <label className="update-label">Headline:</label><br />
              <input type="text" className="update-input" value={this.state.headline} onChange={this.handleChange("headline")} />
              <br />
              <br />
              <div className="updateBox">
                <label className="update-label-keypoints">Key Point(s):</label>
                <ul className="update-keypoints">
                  {keyPoints}
                </ul>
              </div>
              <div className="spacer-div"></div>
              <div className="updateBox">
                <label className="update-label-skills">Skill(s):</label><br />
                <ul className="update-skills">
                  {skills}
                </ul>
              </div>
              <div className="spacer-div"></div>
              <div className="updateBox">
                <label className="update-label-instructors">Instructor(s):</label><br />
                <ul className="update-instructors">
                  {instructors}
                </ul>
              </div>
              <div className="spacer-div"></div>
              <button className="update-card__cta" onClick={this.updateCourse(this.props.course._id)}>Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateCourseComponent;