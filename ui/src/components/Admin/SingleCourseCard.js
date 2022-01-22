import react from "react";
import "./DeleteCourse.scss";
import { Link } from "react-router-dom";
// Displays Single Course Card for each course
class SingleCourseCard extends react.Component {
  
  constructor() {
    super();
    this.state = {
      deletedCourse: {}
    };
  }
  
  deleteCourse= id => event =>  {
    event.preventDefault();
    
    let requestHeaders = {
      method: 'DELETE'
    };
    
    fetch('http://localhost:3002/courses/' + id, requestHeaders)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      alert(data.message);
      window.location.reload();
    })
    .catch(error => alert("Cannot delete Course item ", error));
  
  }
    

  render() {

    let style={
      'background-color': this.props.style
    }

    let skills = this.props.course.skill.map((item) =>
      <li className="skillItem" key={item}>{item}</li>
    );
   
    let keyPoints = this.props.course.keyPoint.map((item) =>
      <li className="keyPointItem" key={item}>{item}</li>
    );

    return (
      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front" style={style}>
              <div class="card__picture card__picture--1">&nbsp;</div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">
                    {this.props.course.title}
                  </span>
                </h4>
              <div class="card__details">
                <ul>
                  <li>{this.props.course.description}</li>
                 
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-10">
              <button className="card__cta-delete" onClick={this.deleteCourse(this.props.course._id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SingleCourseCard;