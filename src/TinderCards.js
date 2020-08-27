import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
//import database from "./firebase.js";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    // Piece of code which runs based on a condition
    useEffect(() => {

        // database
        //     .collection("people")
        //     .onSnapshot((snapshot) => 
        //         setPeople(snapshot.docs.map((doc) => doc.data()))
        //     );


        //This will run ONCE when the component loads, and never again
    }, []);


    return (
        <div>
            <h1>Tinder cards</h1>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
