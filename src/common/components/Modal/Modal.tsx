import React, {FC} from "react";
import s from './Modal.module.scss'
import {SvgSelector} from "../svgSelector/svgSelector";

type Props = {
    active: boolean
    setActive: (value: boolean) => void
}

export const Modal: FC<Props> = ({active, setActive}) => {
    const closeHandler = () => {
        setActive(false)
    }
    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActive(false)}>
            <div className={active ? `${s.modal_content} ${s.activeContent}` : s.modal_content}
                 onClick={e => e.stopPropagation()}>
                <SvgSelector svgName={'underDevelopment'}/>
                <h3>The project is under development.
                    <br/>
                    Some features may be unavailable.</h3>
                <button className={s.close} onClick={closeHandler}>Close</button>
            </div>
        </div>
    )
}