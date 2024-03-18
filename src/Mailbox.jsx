import React, { useState } from 'react';
import './mail.css';

const Mailbox = ({ onFlapClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFlap = () => {
    setIsOpen(!isOpen);
    onFlapClick(); // Call the function passed from the parent component
  };

  return (  
    <div className={`mailbox ${isOpen ? 'open' : ''}`}>
      <div className="flap-container">
        <div className="flap-border"></div>
        <div className="flap" onClick={toggleFlap}>
          <span className="heart" role="img" aria-label="heart">
            ❤️
          </span>
        </div>
      </div>     
      <div className="content">
        <p>Will you be my Valentine, darling?</p>
      </div>
    </div>  
  );
};

export default Mailbox;