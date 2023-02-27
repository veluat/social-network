import s from "../../Users/Users.module.css";
import icon from "../../../assets/images/icon.gif";
import React from "react";

const Preloader = () => {
    return <img className={s.loadingIcon} src={icon}/>
}

export default Preloader;