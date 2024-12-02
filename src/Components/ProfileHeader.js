import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ name, photo, followers, following, posts }) => {
    return (
        <div className="profile-header">
            <div className="profile-photo">
                <img src={photo} alt={`${name}'s profile`} />
            </div>
            <div className="profile-info">
                <h2>{name}</h2>
                <div className="profile-stats">
                    <span><strong>{followers}</strong> Followers</span>
                    <span><strong>{following}</strong> Following</span>
                    <span><strong>{posts}</strong> Posts</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
