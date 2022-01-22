import react from "react";
import "./myCourses.scss";
import { Link } from "react-router-dom";
class MySingleCourseCard extends react.Component {
  constructor(props) {
    super(props);
  }

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
  
  dropCourse = (e) => {
    e.preventDefault();
    
    let courseId = this.props.course._id;
    let courseList = this.isAuthenticated().user.course
    
    for(let i=0; i<courseList.length; i++){
      if(courseList[i] === courseId) {
        courseList = (courseList.slice(0, i)).concat(courseList.slice(i+1,courseList.length))
        break
      }
    }
      
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
    })
    .catch(err => console.log(err))
  }

  render() {
    
    let style={
      'background-color': this.props.style
    }

    let skills = this.props.course.skill.map((item) =>
      <li className="mycourse-skillItem" key={item}>{item}</li>
    );
   
    let keyPoints = this.props.course.keyPoint.map((item) =>
      <li className="mycourse-keyPointItem" key={item}>{item}</li>
    );

    let baseLink="https://www.linkedin.com/jobs/search/?keywords="
    let jobs = this.props.course.skill.map((item) =>
      <li className="mycourse-jobItem" key={item+`Job`}><a href={baseLink+item}>{item}</a></li>
    );

    return (
      <div class="mycourse-row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front" style={style}>
              <div class="card__picture card__picture--1">&nbsp;</div>
              <div class="card__heading">
                <h1 class="card__heading-span card__heading-span--1">
                  {this.props.course.title}
                </h1>
              </div>
              <div class="card__details">
                <ul>
                  <li>{this.props.course.headline}</li>
                  <li>{this.props.course.description}</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <ul className="mycourse-keyPointsList">
                {keyPoints}
              </ul>
              <ul className="mycourse-skillsList">
                {skills}
              </ul>
              <button class="mycourse-card__cta">
                <Link to={`file/${this.props.course.id}`}>Study Now!</Link>
              </button>
              <button class="mycourse-card__cta" onClick={this.dropCourse}>
                Drop Course
              </button>
              <ul className="mycourse-jobsList">
                {jobs}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySingleCourseCard;