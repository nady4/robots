import React from 'react';
import './Card.scss';

interface CardProps {
    name: string;
    email: string;
    id: number;
}

const Card: React.FC<CardProps> = ({ name, email, id }) => {
    const handleClick = () => {
        window.open(`https://robohash.org/${id}?200x200`, '_blank');
    };

    return (
        <a href={`https://robohash.org/${id}?200x200`} target="_blank" rel="noopener noreferrer" className='card' onClick={handleClick}>
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </a>
    );
}

export default Card;
