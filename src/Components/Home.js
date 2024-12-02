import React, { useState } from "react";
import "./Home.css";
import Footer from "./Footer.js";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Recommended");

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    const dropdownOptions = [
        "Recommended",
        "Curated",
        "Most Appreciated",
        "Most Viewed",
        "Most Discussed",
        "Most Recent",
    ];


    const cardsData = [
        { id: 1, designName: "Creative Logo 1", designer: "Designer A", rating: 4.5, imageUrl: require('../assets/images/logo1.jpg') },
        { id: 2, designName: "Creative Logo 2", designer: "Designer B", rating: 4.7, imageUrl: require('../assets/images/logo2.png') },
        { id: 3, designName: "Creative Logo 3", designer: "Designer C", rating: 4.2, imageUrl: require('../assets/images/logo3.png') },
        { id: 4, designName: "Creative Logo 4", designer: "Designer D", rating: 4.8, imageUrl: require('../assets/images/logo4.jpg') },
        { id: 5, designName: "Creative Logo 5", designer: "Designer E", rating: 4.3, imageUrl: require('../assets/images/logo5.png') },
        { id: 6, designName: "Creative Logo 6", designer: "Designer F", rating: 4.9, imageUrl: require('../assets/images/logo6.png') },
        { id: 7, designName: "Creative Logo 7", designer: "Designer G", rating: 4.5, imageUrl: require('../assets/images/logo7.jpg') },
        { id: 8, designName: "Creative Logo 8", designer: "Designer H", rating: 4.7, imageUrl: require('../assets/images/logo8.png') },
        { id: 9, designName: "Creative Logo 9", designer: "Designer I", rating: 4.2, imageUrl: require('../assets/images/logo9.png') },
        { id: 10, designName: "Creative Logo 10", designer: "Designer J", rating: 4.8, imageUrl: require('../assets/images/logo10.png') },
        { id: 11, designName: "Creative Logo 11", designer: "Designer K", rating: 4.3, imageUrl: require('../assets/images/logo11.png') },
        { id: 12, designName: "Creative Logo 12", designer: "Designer L", rating: 4.9, imageUrl: require('../assets/images/logo12.png') },
        { id: 13, designName: "Creative Logo 13", designer: "Designer M", rating: 4.5, imageUrl: require('../assets/images/logo13.jpg') },
        { id: 14, designName: "Creative Logo 14", designer: "Designer N", rating: 4.7, imageUrl: require('../assets/images/logo14.png') },
        { id: 15, designName: "Creative Logo 15", designer: "Designer O", rating: 4.2, imageUrl: require('../assets/images/logo15.jpg') },
        { id: 16, designName: "Creative Logo 16", designer: "Designer P", rating: 4.8, imageUrl: require('../assets/images/logo16.jpg') },
        { id: 17, designName: "Creative Logo 17", designer: "Designer Q", rating: 4.3, imageUrl: require('../assets/images/logo17.png') },
        { id: 18, designName: "Creative Logo 18", designer: "Designer R", rating: 4.9, imageUrl: require('../assets/images/logo18.jpg') },
        { id: 19, designName: "Creative Logo 19", designer: "Designer S", rating: 4.5, imageUrl: require('../assets/images/logo19.jpg') },
        { id: 20, designName: "Creative Logo 20", designer: "Designer T", rating: 4.7, imageUrl: require('../assets/images/logo20.jpg') },
        { id: 21, designName: "Creative Logo 21", designer: "Designer U", rating: 4.2, imageUrl: require('../assets/images/logo21.jpg') },
        { id: 22, designName: "Creative Logo 22", designer: "Designer V", rating: 4.8, imageUrl: require('../assets/images/logo22.png') },
        { id: 23, designName: "Creative Logo 23", designer: "Designer W", rating: 4.3, imageUrl: require('../assets/images/logo23.jpg') },
        { id: 26, designName: "Creative Logo 24", designer: "Designer X", rating: 4.9, imageUrl: require('../assets/images/logo24.png') },
    ];

    return (
        <div className="home-container">
            <div className="filter-search-bar">
                <button className="filter-button">
                    <i className="fa-solid fa-sliders"></i> Filter
                </button>

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search the creative world at work"
                    />
                    <button className="search-image-button">
                        <i className="fa-solid fa-image"></i> Search by Image
                    </button>
                </div>

                <div className="dropdown-container">
                    <button className="dropdown-button" onClick={handleDropdownToggle}>
                        {selectedOption} <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            {dropdownOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="dropdown-option"
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Card Section */}
            <div className="cards-container">
                {cardsData.map((card) => (
                    <div key={card.id} className="card">
                        <img
                            src={card.imageUrl}
                            alt={card.designName}
                            className="card-image"
                        />
                        <div className="card-info">
                            <h3 className="card-title">{card.designName}</h3>
                            <p className="card-designer">by {card.designer}</p>
                            <div className="card-rating">Rating: {card.rating} / 5</div>
                        </div>
                        <div className="card-actions">
                            <button className="icon-button">
                                <i className="fa-solid fa-heart"></i>
                            </button>
                            <button className="icon-button">
                                <i className="fa-solid fa-share-nodes"></i>
                            </button>
                            <button className="icon-button">
                                <i className="fa-solid fa-comment-dots"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer component added here */}
            <Footer />
        </div>
    );
};

export default Home;
