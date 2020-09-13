import React from 'react';
import './card.styles.css';

const Cards = ({ monster }) => {
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}1?set=set2`} alt='#'></img>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Cards;