import react from 'react';
import './MainCourses.scss';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';

//This code is to show courses in the /courses path

class MainCourses extends react.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="carousel">
        <Carousel autoPlay>
            <div className="course">
                <img alt="dataStructures" src="ds.jpg" />
                <p className="legend">Data Structures</p>
            </div>
            <div className="course">
                <img alt="java" src="java.png" />
                <p className="legend">Java</p>
            </div>
            <div className="course">
                <img alt="react" src="react.png" />
                <p className="legend">React</p>
            </div>
        </Carousel>
      </div>
    );
  }
}

export default MainCourses;