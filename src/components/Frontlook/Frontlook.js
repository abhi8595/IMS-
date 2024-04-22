import React, { useEffect, useState } from 'react';
import './Frontlook.css'; 
import { Link } from 'react-router-dom';

const RotatingText = ({ texts, period }) => {
    const [index, setIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(texts[index]);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, period);

        return () => clearInterval(interval);
    }, [texts, period, index]);

    return (
        <span className="rotating-text">
            {currentWord}
        </span>
    );
};



const Frontlook = () => {
    const texts = ["IMS","INVENTORY MANAGEMENT SYSTEM"];
    const period = 3000;

    return (
        <div className='container'>
        <div className="secondline">
          WELCOME TO <RotatingText texts={texts} period={period} /> <span className="slash"> !</span>
          <div className="buttons">
         
                    <Link to="/login" className="btn">SIGN IN</Link>
                    <Link to="/register" className="btn">REGISTER</Link>
                </div>
        </div>
        </div>
    );
};

export default Frontlook;






