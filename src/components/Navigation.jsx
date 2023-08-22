import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/Move.module.css'

const Navigation = () => {
    return (
        <div className={s.Nav}>
            <Link to="/move-props">Move Props</Link>
            <Link to="/my-props">My Props</Link>
            <Link to="/clock-props">Clock</Link>
            <Link to="/pets-props">Pets</Link>
        </div>
    );
}

export default Navigation;
