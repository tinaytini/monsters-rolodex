import React from 'react';
import './card-list.styles.css';
import Cards from '../Cards/Cards';

const CardList = ({ monsters }) => {
    return(
        <div className='card-list'>
           {monsters.map(monster => (
             <Cards key={monster.id} monster={monster} />
        ))}
        </div>
    )
}

export default CardList; 