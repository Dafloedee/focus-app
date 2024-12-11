import React, { useState } from 'react';
import axios from 'axios';

const JamendoTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchTracks = async () => {
    try {
      const response = await axios.get('https://api.jamendo.com/v3.0/tracks', {
        params: {
          client_id: '2cc53008', // Replace with your valid client ID
          format: 'json',
          limit: 10,
          name: query, // Search by query if provided
        },
      });

      const { results, headers } = response.data;

      if (headers.status === 'success' && results.length > 0) {
        setTracks(results);
        setError(null); // Clear any previous errors
      } else {
        setError('No tracks found for your search.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching tracks.');
    }
  };

  return (
    <div>
      <h1>Jamendo Music Search</h1>
      <input
        type="text"
        placeholder="Search for tracks"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchTracks}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <strong>{track.name}</strong> by {track.artist_name} <br />
            <audio controls>
              <source src={track.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JamendoTracks;
