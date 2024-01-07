// Skills.js
import React, { useRef, useEffect, useState } from 'react';
import './index.scss';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Skills = () => {
    const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });
    const skillRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculateBoxShadow = () => {
        if (!skillRef.current) return ''; // Check if skillRef is available

        const { x, y } = mousePosition;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = skillRef.current;

        const maxDeviation = 20;

        // Use a higher multiplier for quicker response to mouse movement
        const xOffset = clamp((x - offsetLeft - offsetWidth / 2) / 15, -maxDeviation, maxDeviation);
        const yOffset = clamp((y - offsetTop - offsetHeight / 2) / 15, -maxDeviation, maxDeviation);

        return `${xOffset}px ${yOffset}px 0px 0px black`;
    };

    return (
        <div className="test">
            <div
                className="skill"
                ref={skillRef}
                style={{ boxShadow: calculateBoxShadow() }}
            >
                <>
                    <li>
                        <h3>Amazon Web Services</h3>
                        <span className="bar">
                            <span className="aws"></span>
                        </span>
                    </li>
                    <li>
                        <h3>Google Cloud Platform</h3>
                        <span className="bar">
                            <span className="gcp"></span>
                        </span>
                    </li>
                    <li>
                        <h3>Azure</h3>
                        <span className="bar">
                            <span className="azure"></span>
                        </span>
                    </li>
                </>
            </div>
        </div>
    );
};

export default Skills;
