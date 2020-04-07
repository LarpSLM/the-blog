import React from "react";
import style from "./style.css";

export default function Post(props) {
    return (
        <div>
            <h1 className={style.title}>{props.title}</h1>
            <div className={style.item}>
                <div className={style.postImg}>
                    <div className={style.imgOverflow}>
                        <img src={props.img} alt="no-img"/>
                        <div>
                            <div className={style.likes}>
                                <i className="far fa-heart"></i>
                                {props.likesCount}
                            </div>
                        </div>
                    </div>
                </div>
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
        </div>
    )
}
