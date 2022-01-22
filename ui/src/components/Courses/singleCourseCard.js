import react from "react";
import "./courses.scss";
import { Link } from "react-router-dom";
import {FaLinkedin} from "react-icons/fa";
class SingleCourseCard extends react.Component {
  
  componentWillMount() {
    // console.log(this.props.course);
  
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
  
  enrollCourse = (e) => {
    e.preventDefault();
    
    let courseId = this.props.course._id;
    let courseList = this.isAuthenticated().user.course

    for(let i=0; i<courseList.length; i++){
      if(courseList[i] === courseId) {
        alert(`You are already enrolled in the course: ${this.props.course.title}`)
        return
      }
    }
      
    courseList.push(courseId)
    
    fetch(`http://localhost:3002/users/${this.isAuthenticated().user._id}`, {
      method: 'PUT',
      headers: { 'content-type':'application/json'},
      body: JSON.stringify({
        course: courseList
      }),
    })
    .then(response => response.json())
    .then(data => {
      window.location.reload();
      console.log(data)
    })
    .catch(err => console.log(err))
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

    let baseLink="https://www.linkedin.com/jobs/search/?keywords="
    let jobs = this.props.course.skill.map((item) =>
      <li className="jobItem" key={item+`Job`}><a href={baseLink+item} target="_blank" rel="noopener noreferrer">{item}</a></li>
    );

    return (
      <div class="row">
        <form onSubmit={this.enrollCourse}>
          <div class="col-1-of-3">
            <div class="sign_card">
              <div class="sign_card__side sign_card__side--front" style={style}>
                <div class="sign_card__picture sign_card__picture--1">&nbsp;</div>
                <div class="sign_card__heading">
                  <h1 class="sign_card__heading-span sign_card__heading-span--1">
                    {this.props.course.title}
                  </h1>
                </div>
                <div class="sign_card__details">
                  <ul>
                    <li>{this.props.course.headline}</li>
                    <li>{this.props.course.description}</li>
                  </ul>
                </div>
              </div>
              <div class="sign_card__side sign_card__side--back sign_card__side--back-1">
                <ul className="keyPointsList">
                  {keyPoints}
                </ul>
                <ul className="skillsList">
                  {skills}
                </ul>
                <button class="sign_card__cta">Enroll</button>
                <br/>
                <br/>
                <a classname="sign_card">Related Jobs in Market</a>
                <FaLinkedin className="sign_card_icon"/>
                <ul className="user-jobsList">
                  
                  {jobs}
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SingleCourseCard;