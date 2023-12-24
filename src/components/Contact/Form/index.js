import React, { useState } from 'react';
import './index.scss';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const publicKey = "uZ-p9m2sS5clLYbqG";
  const serviceID = "service_m7xtoim";
  const templateID = "template_65vdua9";

  emailjs.init(publicKey);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData to your server or perform any necessary actions
    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        console.log('Form data submitted:', formData);

        // Change the submit button text to "Sent!"
        const submitButton = document.querySelector('.submit-button');
        if (submitButton) {
          submitButton.innerText = 'Sent!';
        }

        // Delay the page refresh by 5 seconds
        setTimeout(() => {
          // Refresh the page
          window.location.reload();
        }, 5000);
      })
      .catch((error) => {
        console.log('Something went wrong:', error);

        // Change the submit button text to "Something went wrong"
        const submitButton = document.querySelector('.submit-button');
        if (submitButton) {
          submitButton.innerText = 'Something went wrong';
        }

        // Delay the page refresh by 5 seconds
        setTimeout(() => {
          // Refresh the page
          window.location.reload();
        }, 5000);
      });
  };

  return (
    <div className="container form">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="name-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="email-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="message-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
