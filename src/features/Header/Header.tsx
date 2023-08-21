import React from 'react';
import styles from './Header.module.scss'
import {Menu} from "./menu/Menu";
import {SvgSelector} from "../../common/components/svgSelector/svgSelector";
import {AppPage} from "../../app/app-reducer";
import logo from "./../../assets/images/network.png"

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.header__img}>
                    <img src={logo} alt="logo"/>
                    <span>Social network</span>
                </div>
                <div className={styles.nav}>
                    <Menu selectedPage={props.selectedPage} setPage={props.setPage}/>
                </div>
                <div className={styles.profile}>
                    {props.isAuth &&
                        <div className={styles.profileBox}>
                            <SvgSelector svgName={'profileLight'}/>
                            <span className={styles.login}>{props.login}</span>
                            <button onClick={props.logout} className={styles.logoutBtn}>
                                <SvgSelector svgName={'logout'}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
            {props.appStatus === 'loading' && <div className={styles.loaderLine}></div>}
        </header>
    )
}

type HeaderPropsType = {
    appStatus: string
    logout: () => void
    login: string | null
    isAuth: boolean
    selectedPage: AppPage,
    setPage: (page: AppPage) => void
}

