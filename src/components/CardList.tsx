import React from 'react';
import Card from './Card';
import './CardList.scss';

interface Robot {
    id: number;
    name: string;
    email: string;
}

interface CardListProps {
    robots: Robot[];
}

const CardList: React.FC<CardListProps> = ({ robots }) => {
    return (
        <div className='card-list'>
            {robots.map((robot) => (
                <Card
                    id={robot.id}
                    key={robot.id}
                    name={robot.name}
                    email={robot.email}
                />
            ))}
        </div>
    );
}

export default CardList;
