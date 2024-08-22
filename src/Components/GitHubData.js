import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHubData.css'; // Assuming you have a separate CSS file for styling

const GitHubData = () => {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'username' with the actual GitHub username
        const result = await axios.get("");
        setData(result.data);
      } catch (error) {
        setResponse("Unable to connect");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="card-container">
      {data ? (
        data.map((repo) => (
          <div className="card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))
      ) : (
        <div>{response || "Loading..."}</div>
      )}
    </div>
  );
};

export default GitHubData;
