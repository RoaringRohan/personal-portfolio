import './index.scss';

const Contact = () => {

    return (
        <div className="container contact">
            <div className="text-zone-1">
                <h1>Let's get in touch!</h1>
            </div>
            <div className="text-zone-2">
                <h2>Whether you'd like to contact me for inquiries or to see some of my projects or even just to talk I'm here to respond.</h2>
            </div>
            <div className="form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" className="name-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="email-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" className="message-input"></textarea>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;