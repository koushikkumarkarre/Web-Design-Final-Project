import react, { useState } from 'react';
import {useEffect} from 'react';
import './MyProfile.scss';
import MyProfileEditForm from './MyProfileEditForm'


//This code is to access myprofile details to perform CRUD operations
function MyProfile({match}) {
    
    useEffect(() => {
        fetchProfile();   
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [profileDetails, setProfileDetails] = useState({});

    const fetchProfile = async() =>{
        const fetchProfile = await fetch(`http://localhost:3002/users/${match.params.userId}`);
        const profileDetails = await fetchProfile.json();
        console.log(profileDetails);
        setProfileDetails(profileDetails);
    }

    return (
        <section className="section-myProfile-container">
            <div className="section-myProfile-box">
                <div className="overlay">
                    <h1 className="section-myProfile-image-caption">My Profile</h1>
                    <div className="section-myProfile-image">
                        <img alt="profileImage" src={profileDetails.image} />
                    </div>
                </div>
                <div className="flex-box">
                    <div className="section-myProfile-editable">
                        <p className="profile-para">{profileDetails.name}</p>
                        <p className="profile-para">{profileDetails.email}</p>
                    </div>

                    <div className="section-myProfile-editableOptions">
                        <button className="btn-text-green" onClick={() => setIsOpen(!isOpen)}>Edit</button>
                    </div>
                </div>
                {isOpen && (
                    <div>
                        <MyProfileEditForm profileDetails={profileDetails} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default MyProfile;