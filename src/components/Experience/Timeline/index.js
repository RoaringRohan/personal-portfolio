import './index.scss';

const Timeline = () => {

    return (
        <div className="container">
            <div className="wrapper">
                <ul className="timeline">
                    <li>
                        <span className="title">Company</span>
                        <div className="data">
                            <h3>Position Title</h3>
                            <small>Dates worked</small>
                            <p>Description</p>
                            <span className="close">Close</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Timeline;