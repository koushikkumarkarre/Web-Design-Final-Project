import react, {useState} from 'react';
import './MyCourses.scss';
import "./MyCourses.js";
import './MyCourseData';


//This code is display my courses
import pic1 from "../images/FACES_CIRCLE_L.png";

function CourseItem(props) {

    const hiddenStyle = {
        transition: "all .8s",
        transform: "rotateY(180deg)"
    }

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="course">
            <div class ="row">
                <div class="col-1-of-4">
                    <div class="box">
                        <img onClick src={pic1}/>
                        
                        <h3 style = {props.MyCourses.hidden ? hiddenStyle : null}onClick={() => setIsOpen(!isOpen)} > {props.MyCourses.title}</h3>
                        {isOpen && (
                            <div className="courseContent">
                                <p><b>Description:</b>{ props.MyCourses.description}</p>
                                <p><b>Instructor:</b>{props.MyCourses.Instructor}</p>
                                <p><b>Progress:</b>{props.MyCourses.Progress}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;