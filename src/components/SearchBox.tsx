import React from 'react';
import './SearchBox.scss';

interface SearchboxProps {
    searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbox: React.FC<SearchboxProps> = ({ searchChange }) => {
    return (
        <div className='search-box'>
            <input
                className='search-box-input'
                type='search'
                placeholder='search by name'
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;
