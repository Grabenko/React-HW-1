import React from 'react';
import s from '../styles/Move.module.css'
const Pets = (props) => {
    const {width, padding, color, title, p, img} = props.PetsProps.Pets
    return (
        <div className={s.foto} style={{width: `${width}`, padding: `${padding}`, color:`${color}`}}>
            <p>{title}</p>
            <p>{p}</p>
            <img src={img.P} alt="pets" />
            <img src={img.N} alt="pets" />
        </div>
    );
}

export default Pets;
