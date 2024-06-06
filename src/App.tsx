import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/SearchBox';
import './App.css';

interface Robot {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchfield, setSearchfield] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((users: Robot[]) => {
        setRobots(users);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = React.useMemo(() => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  }, [robots, searchfield]);

  return (
    <div className='container'>
      <h1>ROBOTS</h1>
      <h2>🤖</h2>
      <Searchbox searchChange={onSearchChange} />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
          <CardList robots={filteredRobots} />
      )}
    </div>
  );
};

export default App;
