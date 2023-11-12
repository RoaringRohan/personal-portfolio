import React, { useState, useEffect } from 'react';
import Picture from '../../../assets/images/fixed-3.png';
import Pix1 from '../../../assets/images/pix-1.png';
import Pix2 from '../../../assets/images/pix-2.png';
import Pix3 from '../../../assets/images/pix-3.png';
import Pix4 from '../../../assets/images/pix-4.png';
import Pix5 from '../../../assets/images/pix-5.png';
import Pix6 from '../../../assets/images/pix-6.png';

const Portrait = () => {
    const [showImage, setShowImage] = useState(1);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const glitchTimer = setTimeout(() => {
            setShowImage(2);
        }, 250);

        setTimeout(() => {
            setShowImage(3);
        }, 500);

        setTimeout(() => {
            setShowImage(4);
        }, 750);

        setTimeout(() => {
            setShowImage(5);
        }, 1000);

        setTimeout(() => {
            setShowImage(6);
        }, 1250);

        setTimeout(() => {
            setShowImage(0);
            setHasLoaded(true);
        }, 1500);

        return () => clearTimeout(glitchTimer);
    }, []);

    const renderGlitchImage = (imageIndex) => {
        switch (imageIndex) {
            case 1:
                return <img src={Pix1} alt="Glitch" style={{borderRadius: '50%'}} />;
            case 2:
                return <img src={Pix2} alt="Glitch" style={{borderRadius: '50%'}} />;
            case 3:
                return <img src={Pix3} alt="Glitch" style={{borderRadius: '50%'}} />;
            case 4:
                return <img src={Pix4} alt="Glitch" style={{borderRadius: '50%'}} />;
            case 5:
                return <img src={Pix5} alt="Glitch" style={{borderRadius: '50%'}} />;
            case 6:
                return <img src={Pix6} alt="Glitch" style={{borderRadius: '50%'}} />;
            default:
                return <img src={Picture} alt="My Face" style={{borderRadius: '50%'}} />;
        }
    };

    return (
        <div className={`portrait-container ${hasLoaded ? 'loaded' : ''}`}>
            <div className="glitch-effect">
                {renderGlitchImage(showImage)}
            </div>
        </div>
    );
};

export default Portrait;
