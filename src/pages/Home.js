// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchDataFromBackend } from '../services/api';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataFromBackend()
      .then(headers => {
        setData(headers);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Header Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p>{item.desc}</p>
            {/* Display other details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
