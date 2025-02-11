// artist-hub/src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
