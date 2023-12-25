// index.js
import './index.scss';
import React from 'react';

const Projects = () => {
    return (
        <div className="container project">
            <div className="project-item project-one">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>Project One Description</p>
                    </div>
                </div>
            </div>
            <div className="project-gap"></div>

            <div className="project-item project-two">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>Project Two Description</p>
                    </div>
                </div>
            </div>
            <div className="project-gap"></div>

            <div className="project-item project-three">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>Project Three Description</p>
                    </div>
                </div>
            </div>
            <div className="project-gap"></div>

            <div className="project-item project-four">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>Project Four Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
