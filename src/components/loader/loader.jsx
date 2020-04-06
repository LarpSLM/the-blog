import React from "react";
import style from "./loader.module.css"

function Loader() {
    return (
     <div className={style.loader}>
         <img src="https://beta.radiosparx.com/music/module/images/art/circlingWait.gif" alt="no-img"/>
     </div>
    )
}

export default Loader;