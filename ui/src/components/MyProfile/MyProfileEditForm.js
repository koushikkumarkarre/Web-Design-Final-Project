import react from 'react';
import  FileUploader  from "../Courses/FileUploader";
import './MyprofileEditForm.scss';

//This code to implement Edit functionality in my profile component after login


class MyProfileEditForm extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            image: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.changeHandler = this.changeHandler.bind(this);    
    }

    onChangeValue = (event) => {
        if(event.target.value === "yes"){
            this.setState({
                instructor:"no"
            })
            console.log(this.state.instructor)
        }
        else if(event.target.value === "no"){
            this.setState({
                instructor:"yes"
            })
            console.log(this.state.instructor)
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    editProfile =(e) =>{
        e.preventDefault();
        console.log(this.state)
        fetch(`http://localhost:3002/users/${this.props.profileDetails._id}`, {
            method: 'PUT',
            headers: { 'content-type':'application/json'},
            body: JSON.stringify(this.state),
        })
        .then(response => response.json())
        .then(data => {
            alert("Profile Details Changed.")
            window.location.reload();
            console.log(data)
        })
        .catch(error => alert('Error posting data: ', error));
    }

    componentWillMount(){
        fetch(`http://localhost:3002/users/${this.props.profileDetails._id}`)
        .then((response) => response.json())
        .then((data) => {
            // storing todo data from API to the state variable
            this.setState({
                name: data.name,
                email: data.email,
                password: data.password,
                username: data.username
            });
        });
    }

    render() {

        return (
            <div className="editable-form">
                <form onSubmit={this.editProfile}>
                    <label for="name" className="label-username">
                        <span className="content-username"><span className="design">Username</span></span>
                    </label>
                    <input type="text" className="design_input" name="username" defaultValue={this.props.profileDetails.username} required onChange={this.changeHandler}></input>
                    <label for="name" className="label-name">
                        <span className="content-name"><span className="design">Name</span></span>
                    </label>
                    <input type="text" name="name" className="design_input" defaultValue={this.props.profileDetails.name} required onChange={this.changeHandler}></input>

                    <label for="email" className="email">
                        <span className="content-email"><span className="design">Email</span></span>
                    </label>
                    <input type="email" name="email" className="design_input" defaultValue={this.props.profileDetails.email} required onChange={this.changeHandler}></input>
                    <br />
                    <label for="email" className="email">
                        <span className="content-email"><span className="design">Profile Picture</span></span>
                    </label>
                    <FileUploader />
                    <br />
                    <br />
                    <button className="btn-text-blue">Update</button>
                </form>
            </div>
        )
    }
}

export default MyProfileEditForm;