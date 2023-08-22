import React from 'react';
import s from '../styles/Move.module.css'
import foto from '../assets/img/foto.jpg'
import fotoo from '../assets/img/foto1.jpg'
import fotooo from '../assets/img/foto2.jpg'
import logo from '../assets/img/logo.jpg'
const Move = (props) => {
    console.log(props);
    const { width, p, h2, p1, p2, marginTop, marginBottom, title} = props.MoveProps.Move
    
    return (
        <div className={s.foto} style={{width:`${width}`, p: `${p}`, h2:`${h2}`, p: `${p1}`,p: `${p2}`, marginTop: `${marginTop}`, marginBottom: `${marginBottom}`}}>
            <div className={s.logo}>
            <p className={s.text}>{title}</p>
            <img src={logo} alt="logo" />
            </div>
            <p className={s.video_my}>{p}</p>
            <p className={s.video_myy}>{h2}</p>
            <p className={s.video_my}>{p1}</p>
            <p className={s.video_my}>{p2}</p>

            <img src={foto} alt=""/>
            <img src={fotoo} alt="" />
            <img src={fotooo} alt="" />
        </div>
    );
}

export default Move;
