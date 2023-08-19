import React, {useEffect} from 'react';
import styles from './News.module.scss'
import {AppPage, setPage} from "../../app/app-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {AppStateType} from "../../app/redux-store";
import {SvgSelector} from "../../common/components/svgSelector/svgSelector";
import {NavLink} from "react-router-dom";

export const News = ({setPage}: Props) => {

    useEffect(() => {
        setPage('news')
    }, [])

    return (
        <div className={styles.newsContainer}>
            <div className={styles.newsBlock}>With the unveiling of the Nevera Time Attack, at The Quail, A Motorsports
                Gathering, Rimac Automobili is celebrating a year of breaking performance records – more than 20 so far
                in 2023. The new one-of-12 Limited Edition was revealed on the very same day that it was confirmed the
                Nevera had broken yet another record: a new electric production car benchmark at the Nürburgring of
                7:05:298.
                Achieved today, August 18, the Rimac Nevera broke the previous EV production lap record, beating it by
                20 seconds on its first debut at the famous and ever-challenging Nürburgring track. In the historical,
                shorter track configuration of 20.6 km (12.8-mile) the Nevera set the time of 7:00:928.

                The record-breaking lap, driven by Croatian racing driver Martin Kodrić, was undertaken using Michelin
                Cup2R tires, and verified by independent timing data, TÜV SÜD and on-board telemetry.
                <button className={styles.button}>
                    <a href={'https://www.rimac-newsroom.com/press-releases/rimac-nevera/the-rimac-nevera-sets-a-new-record-at-nurburgring-and-celebrates-with-the-global'}
                       target={'_blank'}>Source</a>
                </button>
            </div>
            <div className={styles.newsBlock}>The California Department of Motor Vehicles today requested that Cruise
                cut in half its fleet of driverless cars in San Francisco, following “concerning incidents” involving
                the vehicles.
                According to a statement released this evening by the DMV, Cruise has agreed to immediately reduce its
                operational fleet in the city by 50 percent. This will mean having “no more than 50 driverless vehicles
                in operation during the day and 150 driverless vehicles in operation at night,” according to the
                statement.
                The DMV also warns that the department reserves the right “to suspend or revoke testing and/or
                deployment permits,” if there is a risk to public safety.
                A Cruise spokesperson confirmed that the company is complying with the request.
                “We believe it’s clear that Cruise positively impacts overall road safety, and look forward to working
                with the CA DMV to make any improvements and provide any data they need to reinforce the safety and
                efficiency of our fleet,” the spokesperson wrote over email.
                Aaron Peskin, president of the board of supervisors, said he welcomed reducing the number of driverless
                Cruise cars on the road.
                <button className={styles.button}>
                    <a href={'https://missionlocal.org/2023/08/dmv-cruise-halve-driverless-cars-investigation-concerning-incidents/'}
                       target={'_blank'}>Source</a>
                </button>
            </div>
            <div className={styles.newsBlock}>
                Amsterdam has started the fight against noisy motorcycles and cars. On Friday, the city placed electric
                road signs in two places to warn road users if their vehicles are too loud. The warnings will eventually
                be replaced by “noise cameras,” which, like speed cameras, automatically send a fine to the offending
                driver, Parool reports.

                The test with the noise signs will start at the Stadhouderskade in the city center and Molenaarsweg in
                Amsterdam-Noord. The installation consists of a noise meter and a screen a little further on. If the
                meter registers too much noise, the driver will see the message “Te luid” - “Too loud” in Dutch. Later
                this month, more sound meters and signs will be installed on Europaboulevard in Zuid and on Tussen Meer
                in Nieuw-West.
                The municipality hopes that the signs alone will already alert road users to the noise their vehicles
                make and prompt them to do something about it, a spokesperson told Parool.

                Rotterdam is conducting a similar experiment in collaboration with Amsterdam. It is part of a broader
                approach, the municipality of Amsterdam spokesperson said. “Other measures we are taking include a
                simpler way of enforcement and a feasibility study by TNO into the application of the noise camera. We
                try to reduce noise nuisance in various ways.”
                <button className={styles.button}>
                    <a href={'https://nltimes.nl/2023/08/11/amsterdam-use-noise-cameras-loud-cars'}
                       target={'_blank'}>Source</a>
                </button>

            </div>
        </div>

    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const NewsContainer = connect((mapStateToProps), {setPage})(withAuthRedirect(News))

type Props = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    setPage: (setPage: AppPage) => void
}

