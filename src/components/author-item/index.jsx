import React from "react";
import style from "./style.css";

export default function AuthorItem(props) {
    return (
        <div className={style.author}>
            <div className={style.avatar}>
                <img src={`http://school-blog.ru/images/${props.avatar}`} alt=""/>
            </div>
            <h3>{props.login}</h3>
            <p>{props.firstName}</p>
            <p>{props.email}</p>
            <p>{props.registration}</p>
        </div>
    )
}