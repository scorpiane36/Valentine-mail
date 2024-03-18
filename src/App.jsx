import React from 'react';
import Mailbox from './Mailbox';
import './App.css'

const App = () => {
  const handleFlapClick = () => {
    // Handle the flap click event here
    console.log('Flap clicked!');
  };

  return (
    <div className='app'>
      <Mailbox onFlapClick={handleFlapClick} />
    </div>
  );
};

export default App;