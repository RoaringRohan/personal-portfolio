import React from 'react';
import './index.scss';
import Form from './Form';

const Contact = () => {
  return (
    <div className="container contact">
      <div className="text-zone">
        <h1>Let's get in touch!</h1>
        <h2>Whether you'd like to contact me for inquiries or to see some of my projects or even just to talk I'm here to respond.</h2>
      </div>
      <div className="input">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
