import React from 'react';
import { useSelector } from 'react-redux';
import Elmala from '../elmala.png'

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section
    class="hero is-fullheight section is-centered"
    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, backgroundPosition: 'center' }}
  >
    <div class="container has-text-centered">
      <h1 class="title is-1 has-text-white is-marginless">ELMALA DATABASE</h1>
      <p class="has-text-white title is-size-5 mt-6">
        </p>
        <h2 className="subtitle has-text-white is-marginless">
          Welcome{' '}
        <strong class="has-text-white">{user && user.name}</strong> 
      </h2>
    </div>
  </section>
  
  );
};

export default Welcome;


