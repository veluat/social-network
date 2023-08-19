import React from 'react';
import styles from "../../Header.module.scss";
import {NavLink} from "react-router-dom";
import {AppPage} from "../../../../app/app-reducer";
import {SvgSelector} from "../../../../common/components/svgSelector/svgSelector";


export const MenuItem = ({link, svgName, active, setActive}: MenuItemProps) => {
    const className = active === svgName ? styles.activeItem : styles.notActive

    const onClickHandler = () => {
        setActive(svgName)
    }

    return (
        <NavLink to={link} className={`${styles.item} ${className}`} onClick={onClickHandler}
                 activeClassName={styles.activeLink}>
            <SvgSelector svgName={svgName}/>
            <span className={styles.linkName}>{svgName[0].toUpperCase() + svgName.slice(1)}</span>
        </NavLink>
    );
};

type MenuItemProps = {
    link: string
    svgName: AppPage
    active: AppPage
    setActive: (page: AppPage) => void
}
