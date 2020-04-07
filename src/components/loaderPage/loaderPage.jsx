import React from "react";
import style from "./loaderPage.module.css"
import Loader from "../loader/loader";


function LoaderPage() {
    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <div className={style.loader}>
                    <Loader/>
                </div>
                <p>Loading</p>
            </div>
        </div>
    )
}

export default LoaderPage;