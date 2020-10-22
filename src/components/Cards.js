import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/raja-ampat-islands.jpg" 
                            text="Find a pristine paradise where Mother Nature and warm friendly people welcome you with all the exceptional wonders in Raja Ampat"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/malioboro.jpg" 
                            text="Spend your starry night around Malioboro street to get the hand-made crafts and batiks, Parade of street foods can also be found along the way"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/borobudur.jpg" 
                            text="Visit the world’s biggest Buddhist monument, Borobudur Temple, an ancient site widely considered to be one of the world’s seven wonders."
                            label="History"
                            path="/services"
                        />
                        <CardItem 
                            src="images/komodo.jpg" 
                            text="Meet Komodo and their habitat with beautiful panoramic views of savannas, rain forests, white beaches, beautiful corals, and clean blue seas."
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/bali.jpg" 
                            text="Enjoy Bali's natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity in this paradise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
