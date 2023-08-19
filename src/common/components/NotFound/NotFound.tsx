import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NotFound.module.scss'
import {SvgSelector} from "../svgSelector/svgSelector";

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.descriptionBox}>
                <h1 className={styles.title}>Page not <span className={styles.bold}>found</span> </h1>
                <p className={styles.description}>Oops! Looks like you followed a bad link.</p>
                <NavLink to={'/'} className={styles.goBack}>Go Back</NavLink>
            </div>
            <div className={styles.svg}>
                <SvgSelector svgName={'notFound'}/>
            </div>
        </div>
    );
};

export default NotFound;