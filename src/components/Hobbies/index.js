import React, { useState, useEffect } from 'react';
import './index.scss';
import Spline from '@splinetool/react-spline';

const Hobbies = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an asynchronous data fetch
        // Replace this with your actual data fetching logic
        const fetchData = async () => {
            // Simulate a delay of 2 seconds (replace with your actual fetch logic)
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Set loading to false to indicate that data has been loaded
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="container hobbies">
            {loading ? (
                // Display loading message or spinner while data is being fetched
                <p>Loading, this may take 30 seconds...</p>
            ) : (
                // Render the Spline component once data is loaded
                <Spline scene="https://prod.spline.design/0obsWM19WLvpaZwN/scene.splinecode" />
            )}
        </div>
    );
};

export default Hobbies;
