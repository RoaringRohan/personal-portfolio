import './index.scss';

const Form = () => {

    return (
        <div className="container form">
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

export default Form;