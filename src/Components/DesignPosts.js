import React from 'react';
import './DesignPosts.css';

const DesignPosts = ({ designs }) => {
    return (
        <div className="design-posts">
            {designs.map((design, index) => (
                <div key={index} className="design-post">
                    <img src={design.image} alt={`Design ${index + 1}`} />
                    <div className="design-description">
                        <p>{design.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesignPosts;
