import './index.scss';
import React from 'react';

const Projects = () => {
    return (
        <div className="project-container">
            <div class="accordion">
                <div class="box a1">
                    <div class="image_1">
                        <div class="text">
                            <h2>Music Playlist Application</h2>
                            <p>
                                Created a full-stack application that allows users to create playlists using a NoSQL backend with Angular as the front.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="box a2">
                    <div class="image_2">
                        <div class="text">
                            <h2>Course Outline Management Application</h2>
                            <p>
                                Collaborated with a 3 member team to make a full-stack course management system which utilized Firebase as back-end and Google Compute Engine for deployment.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="box a3">
                    <div class="image_3">
                        <div class="text">
                            <h2>Service Ticket Management Application</h2>
                            <p>
                                Created an internal ticket management application to manage technical service and support for companies using a REST API and MySQL database.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="box a4">
                    <div class="image_4">
                        <div class="text">
                            <h2>Image Recognition Application</h2>
                            <p>
                                Created and tested a neural network for hand-written number recognition using Python.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;