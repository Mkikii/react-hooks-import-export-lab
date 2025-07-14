// src/components/Home.js
import React from 'react';
import { username, city, image } from '../user';

function Home() {
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <p>From {city}</p>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default Home;