import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            url: ''
        },
        {
            name: 'Elon Musk',
            url: ''
        }
    ]);


    return (
        <div>
            <h1>Tinder cards</h1>
            {people.map(person => {
                <TinderCard
                className="swipe"
                key={people.name}
                >
                    <div 
                    className="card">
                        style={{ backgroundImage: `url(${people.url})`}}
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            })}
        </div>
    )
}

export default TinderCards
