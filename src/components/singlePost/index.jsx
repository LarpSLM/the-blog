import React from "react";
import style from "./style.css";
import {Link} from "react-router-dom";

export default function SinglePost(props) {
    return (
        <div className={style.item}>
            <div className={style.postImg}>
                <Link to={`/post/${props.id}`}>
                    <img src={props.img} alt="no-img"/>
                </Link>
                <div className={style.likes}>
                    <i className="far fa-heart"></i>
                    {props.likesCount}
                </div>
            </div>
            <Link to={`/post/${props.id}`}
                  className={style.title}>
                {props.title}
            </Link>
            <div className={style.postInfo}>
                <div className={style.after}>
                    <div className={style.author}>
                        <div className={style.ava}>
                            <img src={props.avatar} alt=""/>
                        </div>
                        <span>{props.login}</span>
                    </div>
                </div>
                <span className={style.after}>{props.data}</span>
                <span>№{props.number}</span>
            </div>
            <div className={style.content}>{props.content}</div>
        </div>
    )
}