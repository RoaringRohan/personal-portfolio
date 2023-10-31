import './index.scss';
import Picture from '../../../assets/images/selfie.png';

const Portrait = () => {
    return (
        <div className="portrait-container">
            <img src={Picture} alt="My Face"/>
        </div>
    );
}

export default Portrait;