import './index.scss';
import SchoolProject from '../../assets/images/SchoolProject.png';
import ImageRecog from '../../assets/images/NumberIdentificationPython.png';
import Portrait from '../../assets/images/IMG_0014.jpg';

const Home = () => {

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span>Hey,</span>
                    <br />
                    <span>I'm Rohan!</span>
                </h1>
                <h2>Software Engineer / Full-Stack Developer</h2>
                <p>
                    Here's all the projects that I've worked on in the past.
                </p>
            </div>
            <div className="portrait-container">
                <img src={Portrait} alt="My Face"/>
            </div>
            <div className="projects">
                <ul>
                    <li>
                        <img className="project-pic" src={SchoolProject} alt="School Project"/>
                        <p className="project-name">Music Playlist Application</p>
                    </li>
                    <li>
                        <img className="project-pic" src={SchoolProject} alt="School Project"/>
                        <p className="project-name">Course Outline Management Application</p>
                    </li>
                    <li>
                        <img className="project-pic" src={SchoolProject} alt="School Project"/>
                        <p className="project-name">Service Ticket Management Application</p>
                    </li>
                    <li>
                        <img className="project-pic" src={ImageRecog} alt="Number Recognition Project"/>
                        <p className="project-name">Image Recognition Application</p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Home;