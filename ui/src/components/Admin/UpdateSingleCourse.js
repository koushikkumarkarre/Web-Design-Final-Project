// import react, { useEffect, useState } from 'react';
// import './UpdateSingleCourse.scss';



// function AddCourseItem({ match }){

//      useEffect(()=>{
//         fetchCourse();
//         console.log(match);
//     }, []);

//     const [course, setCourse] = useState({});

//     const [name, setName ] = useState();
//     const [description, setDescription] = useState();
//     const [category, setCategory] = useState();
    
//     const fetchCourse = async() =>{
//         const fetchCourse = await fetch(`http://localhost:9000/app/courses/${match.params.courseId}`);
//         const course = await fetchCourse.json();
//         console.log(course);
//         setCourse(course);
//         setName(course.name)
//         setDescription(course.description)
//         setCategory(course.category)
//     }

//     const changeHandler = x => e=> {
//         e.preventDefault();
//         if(x == "name"){
//             setName(e.target.value);
//         }
//         if(x == "description"){
//             setDescription(e.target.value);
//         }
//         if(x == "category"){
//             setCategory(e.target.value);
//         }
        
//     }

//     const editCourse=(e)=>{
//         e.preventDefault();
//         const course = {
//             name,
//             description,
//             category
//         }
//         console.log(course)
//         fetch(`http://localhost:9000/app/courses/${match.params.courseId}`, {
//             method: 'PUT',
//             headers: { 'content-type':'application/json'},
//             body: JSON.stringify(course),
//           })
//             .then(response => response.json())
//             .then(data => {

//               window.location.reload();
//               console.log(data)
//             })
//             .catch(error => alert('Error posting data: ', error));
//     }


//     return (
//         <section className="update-CourseItem-container">
//             <div className="update-CourseItem-box">
//                 <div className="overlay">
//                     {/* <button className="btn-text-add">Add Course</button> */}
//                 </div>


//                 <div className="flex-box1">
//                 </div>
//                 <div>
//                     <div className="editable-AddCourse">
//                         <form onSubmit={editCourse}>
//                             <label for="name" className="label-name">
//                                 <span className="content-name">CourseName</span>
//                             </label>
//                             <input type="text" name="name" defaultValue={course.name} required onChange={changeHandler("name")} ></input>

//                             <label for="desc" className="desc">
//                                 <span className="content-desc">Description</span>
//                             </label>
//                             <input type="text" name="description" defaultValue={course.description} required onChange={changeHandler("description")}  ></input>

//                             <label for="category" className="category">
//                                 <span className="content-category">category</span>
//                             </label>
//                             <input type="text" name="category" defaultValue={course.category} required onChange={changeHandler("category")}></input>

//                             <br></br>
//                             <br></br>

//                             <button className="btn-text-blue">Update</button>

//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default AddCourseItem;
