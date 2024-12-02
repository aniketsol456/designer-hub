import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import DesignPosts from '../Components/DesignPosts';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

    const navigate = useNavigate();

    const designer = {
        name: 'Yupin Bhensdadiya',
        photo: 'https://via.placeholder.com/120',
        followers: 1500,
        following: 250,
        posts: 12,
    };

    const Handlelogout  = () => {
        navigate("/login");
    }

    const designs = [
        { image: 'data:image/jpeg;base64,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', description: 'Design 1 description' },
        { image: 'data:image/jpeg;base64,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', description: 'Design 2 description' },
        { image: 'data:image/jpeg;base64,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', description: 'Design 3 description' },
        { image: 'data:image/jpeg;base64,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', description: 'Design 4 description' },
        { image: 'data:image/jpeg;base64,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', description: 'Design 5 description' },
    ];

    return (
        <div className="profile-page">
            <ProfileHeader
                name={designer.name}
                photo={designer.photo}
                followers={designer.followers}
                following={designer.following}
                posts={designer.posts}
            />
            <DesignPosts designs={designs} />
           

            <div className="logout-section">
                <button className="logout-button" onClick={Handlelogout}>
                    Logout
                </button>
            </div>
        </div>



    );
};

export default ProfilePage;
