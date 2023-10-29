import './index.scss';
import React, { useState } from 'react';
import { Data } from './data';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Projects = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <div className="projects-container">
            {Data.map((item, index) => {
                return (
                    <>
                    <div className='wrap' onClick={() => toggle(index)} key={index}>
                        <img src={item.picture} alt="Project Visual" />
                        <p>{item.projectName}</p>
                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </div>
                    {clicked === index ? (
                        <div className='dropdown'>
                            <p>{item.answer}</p>
                        </div>
                    ) : null}
                    </>
                );
            })}
        </div>
    );
}

export default Projects;