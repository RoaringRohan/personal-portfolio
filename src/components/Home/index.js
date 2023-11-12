import './index.scss';
import Portrait from './Portrait';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className="portrait">
                    <Portrait />
                </div>
                <div className="text-zone">
                    <h1>
                        <span>Hey,</span>
                        <br />
                        <span>I'm Rohan!</span>
                    </h1>
                    <h2>Software Engineer / Full-Stack Developer</h2>
                </div>
                <div className="project-intro">
                    <h3>
                        Here's all the projects that I've worked on in the past.
                    </h3>
                </div>
                <div className="project-accordion">
                    <Projects />
                </div>
            </div>
        </>
    );
}

export default Home;


// Insert this when ready to start working on profile pic in homepage
//<Portrait />