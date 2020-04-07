import React from "react";
import style from "./loader.module.css";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: "auto",
                background: "none",
                WebkitAnimationPlayState: "running",
                animationPlayState: "running",
                WebkitAnimationDelay: "0s",
                animationDelay: "0s"
            }}
            width="150"
            height="150"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
        >
            <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="#2b2b2b"
                strokeDasharray="47.12388980384689 47.12388980384689"
                strokeLinecap="round"
                strokeWidth="8"
                style={{
                    WebkitAnimationPlayState: "running",
                    animationPlayState: "running",
                    WebkitAnimationDelay: "0s",
                    animationDelay: "0s"
                }}
                transform="rotate(241.861 50 50)"
            >
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle
                cx="50"
                cy="50"
                r="21"
                fill="none"
                stroke="#737373"
                strokeDasharray="32.98672286269283 32.98672286269283"
                strokeDashoffset="32.987"
                strokeLinecap="round"
                strokeWidth="8"
                style={{
                    WebkitAnimationPlayState: "running",
                    animationPlayState: "running",
                    WebkitAnimationDelay: "0s",
                    animationDelay: "0s"
                }}
                transform="rotate(-241.861 50 50)"
            >
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;-360 50 50"
                ></animateTransform>
            </circle>
        </svg>
    );
}


export default function Loader() {
    return (
     <div className={style.loader}>
         <Icon/>
     </div>
    )
}