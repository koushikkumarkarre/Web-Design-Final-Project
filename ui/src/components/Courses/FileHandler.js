import React from 'react';
import {useEffect} from 'react';
import { useState } from "react";
import VideoApp from '../Videoplayer/VideoApp';

function FileHandler({match}) {

    useEffect(() => {
        fetchFile();   
    }, []);

    const [courseDetails, setCourseDetails] = useState({});

    const fetchFile = async() =>{
        const fetchCourse = await fetch(`http://localhost:3002/courses/${match.params.courseId}`);
        const courseDetails = await fetchCourse.json();
        console.log(courseDetails);
        setCourseDetails(courseDetails);
    }
    
    return (
        <section className="section-myProfile-container">
            { courseDetails.medium === 'video' && (
                <React.Fragment>
                    <VideoApp />
                </React.Fragment>
            )}
            { courseDetails.medium === 'document' && (
                <React.Fragment>
                    
                </React.Fragment>
            )}
        </section>
    )
}

export default FileHandler