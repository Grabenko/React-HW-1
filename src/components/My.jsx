import React from 'react';
import s from '../styles/Move.module.css'
const My = (props) => {
    const{width, margin, title, color, img, p, p1, video} = props.MyProps.My
    return (
        <div className={s.foto} style={{width: `${width}`, margin: `${margin}`, color:`${color}`}}>
            <p className={s.text_my}>{title}</p>
            <img src={img} alt="MY" />
            <p>{p}</p>
            <p>{p1}</p>
            <p className={s.video_my}>{video}</p>
        </div>
    );
}

export default My;
