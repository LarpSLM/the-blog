import React from "react";
import style from "./loaderPage.module.css"
import LoadIMG from "./loaderPage.svg";


function LoaderPage() {
    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <div className={style.loader}>
                    <img src={LoadIMG} alt=""/>
                </div>
                <p>Loading</p>
            </div>
        </div>
    )
}

export default LoaderPage;