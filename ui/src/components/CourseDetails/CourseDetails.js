import react, { useEffect, useState } from 'react';
import {userEffect} from 'react';
import './CourseDetails.scss';


function CourseDetails({match}){
    useEffect(()=>{
        fetchCourse();
        console.log(match);
    }, []);

    const [course, setCourse] = useState({});

    const fetchCourse = async() =>{
        const fetchCourse = await fetch(`http://localhost:3000/app/courses/${match.params.courseId}`);
        const course = await fetchCourse.json();
        console.log(course);
        setCourse(course);
    }

    return(
        <section className="section-Course-container">
                 <div className="section-Course-box">
                    <div className="section-Course-heading">
                         <h1 className="heading-secondary-Course">{course.name}</h1>
                     </div>
                     <div className="section-Course-editable">
                         <p className="para">{course.description}</p>
                         <a href= {course.category}><p className="para"></p>More Resource</a>
                     </div>
                     <br></br>

                     {/* {Render lessons of that course over here} */}
                 </div>
             </section>

    )
}

export default CourseDetails;