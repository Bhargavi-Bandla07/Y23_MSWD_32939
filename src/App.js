import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHubData.css';

const GitHubData = () => {
  // Initialize data as an empty array
  const [data, setData] = useState([]);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'username' with the actual GitHub username
        const result = await axios.get("https://api.github.com/users/username/repos");
        console.log(result.data); // Log the response data to inspect its structure
        setData(result.data); // Assuming result.data is an array
      } catch (error) {
        setResponse("Unable to connect");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="card-container">
      {data.length > 0 ? (
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
