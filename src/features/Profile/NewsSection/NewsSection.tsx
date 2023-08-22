import React, {useState} from 'react';
import styles from './NewsSection.module.scss'
import {AppPage} from "../../../app/app-reducer";
import {NavLink} from "react-router-dom";
import {SvgSelector} from "../../../common/components/svgSelector/svgSelector";
import {Modal} from "../../../common/components/Modal/Modal";

export const NewsSection: React.FC<Props> = ({setPage}) => {

    const [modalActive, setModalActive] = useState(false)

    const onClickHandler = () => {
        setPage('news')
    }

    return (
        <div className={styles.section}>
            <div className={styles.aboutFeatures}>
                <SvgSelector svgName={'info'}/>
                <h3>Information
                    <br/>
                    ABOUT FEATURES</h3>
                <button className={styles.openButton} onClick={() => setModalActive(true)}>Read</button>
            </div>
            <div className={styles.news}>
                <h3>News</h3>
                <div>With the unveiling of the Nevera Time Attack, at The Quail, A Motorsports Gathering, Rimac
                    Automobili is celebrating a year of breaking performance records – more than 20 so far in 2023.
                    <NavLink to={'/news'} onClick={onClickHandler} className={styles.newsLink}>..more</NavLink>
                </div>
                <div>The California Department of Motor Vehicles today requested that Cruise cut in half its fleet of
                    driverless cars in San Francisco, following “concerning incidents” involving the vehicles.
                    <NavLink to={'/news'} onClick={onClickHandler} className={styles.newsLink}>
                        ..more
                    </NavLink>
                </div>
                <div>
                    Amsterdam to use "noise cameras" against too loud cars. Amsterdam has started the fight against
                    noisy motorcycles and cars.
                    <NavLink to={'/news'} onClick={onClickHandler} className={styles.newsLink}>..more</NavLink>
                </div>
            </div>
            {modalActive && <Modal active={modalActive} setActive={setModalActive}/>}
        </div>
    );
};

type Props = {
    setPage: (page: AppPage) => void
}
