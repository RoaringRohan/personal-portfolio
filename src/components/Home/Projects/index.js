// index.js
import './index.scss';
import React from 'react';

const Projects = () => {
    return (
        <div className="container project">
            <div className="project-item project-one">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>Worked with a team of 5 members in my Databases course to create a full-stack application that would serve as a platform to help IT personnel with managing their ticket system. The application uses a MySQL database with REST API endpoints and utilities HTML, JavaScript, and CSS for the front-end.</p>
                    </div>
                </div>
            </div>
            <div className="project-gap"></div>

            <div className="project-item project-two">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>This project was made as part of a Web Development course. It's a full-stack music application where users can log in to create playlists, and view others' playlists and review them. This app uses a REST API tied with a MongoDB database and Angular JS. Also deployed to AWS with a public URL.</p>
                        <a href="https://github.com/RoaringRohan/SE3316A-Music-Playlist-Application" target="_blank" rel="noopener noreferrer">
                            Click here to see GitHub Repo!
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-gap"></div>

            <div className="project-item project-three">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>As part of the Western AI club, I worked on a team of 5 to develop an AI recognition algorithm that would identify hand-written numbers as well as perform simple math expressions. The ML algorithm uses PyTorch and was trained using a large training model.</p>
                    </div>
                </div>
            </div>
            <div className="project-gap"></div>

            <div className="project-item project-four">
                <div className="project-text">
                    <div className="project-text-content">
                        <p>As part of the Software Design course, I worked in a group of 3 to develop a Learning Management System that allows Professors and TA's to create and edit course outlines and submit them for approvals. The app uses Firebase for storage, vanilla JavaScript, HTML, CSS to serve the front-end and it was deployed on a GCP VM.</p>
                        <a href="https://github.com/RoaringRohan/SE3350B-Course-Outline-Management" target="_blank" rel="noopener noreferrer">
                            Click here to see GitHub Repo!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
