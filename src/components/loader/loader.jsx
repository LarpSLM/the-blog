import React from "react";
import style from "./loader.module.css";
import LoadImg from "./loader.svg";

function Loader() {
    return (
     <div className={style.loader}>
         <img src={LoadImg} alt="no-img"/>
     </div>
    )
}

export default Loader;