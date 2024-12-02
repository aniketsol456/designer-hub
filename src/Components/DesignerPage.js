import React from "react";
import "./DesignerPage.css";

const designersData = [
  {
    id: 1,
    name: "Yupin Bhensdadiya",
    rating: 4.8,
    profileLink: "/designer-a-profile",
    designs: [
      { id: 1, name: "Logo 1", imageUrl: require("../assets/images/logo1.jpg") },
      { id: 2, name: "Logo 2", imageUrl: require("../assets/images/logo2.png") },
      { id: 3, name: "Logo 3", imageUrl: require("../assets/images/logo3.png") },
      { id: 4, name: "Logo 4", imageUrl: require("../assets/images/logo4.jpg") },
      { id: 5, name: "Logo 5", imageUrl: require("../assets/images/logo5.png") },
    ],
  },
  {
    id: 2,
    name: "Aniket Solanki",
    rating: 4.6,
    profileLink: "/designer-b-profile",
    designs: [
      { id: 1, name: "Logo 6", imageUrl: require("../assets/images/logo6.png") },
      { id: 2, name: "Logo 7", imageUrl: require("../assets/images/logo7.jpg") },
      { id: 3, name: "Logo 8", imageUrl: require("../assets/images/logo8.png") },
      { id: 4, name: "Logo 9", imageUrl: require("../assets/images/logo9.png") },
      { id: 5, name: "Logo 10", imageUrl: require("../assets/images/logo10.png") },
    ],
  },
  // Add more designers here
];

const DesignersPage = () => {
  return (
    <div className="designers-page">
      <h1>Designers Showcase</h1>
      <div className="designers-container">
        {designersData.map((designer) => (
          <div key={designer.id} className="designer-row">
            <div className="designer-details">
              <h2 className="designer-name">{designer.name}</h2>
              <p className="designer-rating">Rating: {designer.rating} / 5</p>
              <button
                className="profile-button"
                onClick={() => (window.location.href = designer.profileLink)}
              >
                Visit Profile
              </button>
            </div>
            <div className="designs-container">
              {designer.designs.map((design) => (
                <div key={design.id} className="design-card">
                  <img
                    src={design.imageUrl}
                    alt={design.name}
                    className="design-image"
                  />
                  <p className="design-name">{design.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignersPage;
