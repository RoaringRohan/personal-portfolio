import './index.scss';
import Portrait from './Portrait';
import Projects from './Projects';

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
            <Portrait />
            <Projects />
        </div>
        </>
    );
}

export default Home;