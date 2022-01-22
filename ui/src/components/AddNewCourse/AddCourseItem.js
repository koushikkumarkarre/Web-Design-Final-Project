import react from 'react';
import { Redirect } from 'react-router-dom';
import FileUploader from '../Courses/FileUploader';
import './AddCourseItem.scss';

// const isAuthenticated = () => {
//     if (typeof window == 'undefined') {
//         return false;
//     }

//     if (localStorage.getItem('jwt')) {
//         return JSON.parse(localStorage.getItem('jwt'));
//     } else {
//         return false;
//     }
// }

//Allows admin to Add new course item to course catalog 
class AddCourseItem extends react.Component {
    constructor(props) {
        super(props);
        // Set state object to empty course
        this.state = {
            // instructor:false
            title: '',
            description: '',
            headline: '',
            keyPoint: [],
            skill: [],
            rating: ((4+Math.random()).toFixed(2)),
            instructor: [],
            path: 'sample.mp4',
            medium: 'medium',
            redirect: false,
        }
    }

    // Handles changes that occur to the form elements
    changeHandler = name => event => {
        let list = []
        if(name === 'skill') {
            this.setState({ [name]: (event.target.value).split(',') });
            console.log(this.state[name])
        }
        else {
            if(name === 'keyPoint') {
                this.setState({ [name]: (event.target.value).split(',') });
                console.log(this.state[name])
            }
            else {
                if(name === 'instructor') {
                    this.setState({ [name]: (event.target.value).split(',') });
                    console.log(this.state[name])
                }
                else {
                    this.setState({ [name]: event.target.value });
                    console.log(this.state[name])
                }
            }
        }
    };

    // Checks if the fields are editable or viewable
    setIsOpen = () => {
        this.state.isOpen = !this.state.isOpen;
    }

    // Function to add new course using the backend API
    addNewCourse = (e) => {
        e.preventDefault();
        const { title, description, headline, keyPoint, skill, instructor, path, medium } = this.state;
        const course = {
            title,
            description,
            headline,
            keyPoint,
            skill,
            instructor,
            path,
            medium
        };
        fetch(`http://localhost:3002/courses/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(course),
        })
        .then(response => response.json())
        .then(data => {
                // window.location.reload();
            alert(`Course ${data.title} is added to the catalog`)
            this.setState({
                redirect: true
            })
        })
        .catch(error => alert('Error saving Course: ', error));
    }

    // Renders the component
    render() {
        const { title, description, headline, keyPoint, skill, instructor, path, medium, redirect } = this.state;

        if (redirect) {
            // Rediects to courses dashboard
            return <Redirect to="/courses"></Redirect>
        }

        return (
            // Section containing the Add new course container
            <section className="add-CourseItem-container">
                <div className="add-CourseItem-box">
                    <div className="add-overlay">
                        {/* <button className="btn-text-add">Add Course</button> */}
                    </div>
                    {/* Card display for the courses */}
                    <div className="add-flex-box1">
                        <div className="add-editable-AddCourse">
                            <h2 className="add-heading">Add Course</h2>
                            {/* Form handler for the add new course */}
                            <form onSubmit={this.addNewCourse}>
                                <label for="name" className="add-label-name">
                                    <span className="add-content-name">Course Title:</span>
                                </label>
                                <input className="add-Input" type="text" name="title" value={title} required onChange={this.changeHandler("title")}></input>

                                <label for="desc" className="desc">
                                    <span className="add-content-name">Description:</span>
                                </label>
                                <input className="add-Input" type="text" name="description" value={description} required onChange={this.changeHandler("description")}></input>
                                <br />
                                <br />
                                
                                {/* File Uploader */}
                                <div className="add-uploader">
                                    <label for="category" className="category">
                                        <span className="add-content-name">Course View: </span>
                                    </label>
                                    <FileUploader className="fileUploader" />
                                    <br />
                                    <br />
                                </div>
                                
                                <label for="category" className="category">
                                    <span className="add-content-name">Headline:</span>
                                </label>
                                <input className="add-Input" type="text" name="headline" value={headline} required onChange={this.changeHandler("headline")}></input>
                                
                                <label for="category" className="category">
                                    <span className="add-content-name">Skills(s):</span>
                                </label>
                                <input className="add-Input" type="text" name="headline" value={skill} required onChange={this.changeHandler("skill")}></input>

                                <label for="category" className="category">
                                    <span className="add-content-name">KeyPoint(s):</span>
                                </label>
                                <input className="add-Input" type="text" name="headline" value={keyPoint} required onChange={this.changeHandler("keyPoint")}></input>

                                <label for="category" className="category">
                                    <span className="add-content-name">Instructor(s):</span>
                                </label>
                                <input className="add-Input" type="text" name="headline" value={instructor} required onChange={this.changeHandler("instructor")}></input>
                                <br />
                                <br />
                                {/* File Uploader */}
                                <div className="add-uploader">
                                    <label for="category" className="category">
                                        <span className="add-content-name">Course Material: </span>
                                    </label>
                                    <FileUploader className="fileUploader" />
                                    <br />
                                    <br />
                                </div>

                                <button className="add-button">Add to Catalog</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AddCourseItem;