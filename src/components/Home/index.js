import './index.scss';
import Portrait from './Portrait';
import Projects from './Projects';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulating a loading delay for demonstration
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="container home">
            <div className={`container home-page ${isLoaded ? 'loaded' : ''}`}>
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
                    <h4>Western University UNDGRAD - 2025</h4>
                </div>
                <div className="project-intro">
                    <h3>Here's all the projects that I've worked on in the past.</h3>
                </div>
                <div className="project-accordion">
                    <Projects />
                </div>
            </div>
        </div>
    );
}

export default Home;
