import './index.scss';
//import Portrait from './Portrait';
import Projects from './Projects';
import Nav from '../Nav';

const Home = () => {

    return (
        <>
        <Nav />
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
            <Projects />
        </div>
        </>
    );
}

export default Home;

// Insert this when ready to start working on profile pic in homepage
//<Portrait />