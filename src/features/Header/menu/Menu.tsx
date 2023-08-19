import React from 'react';
import {MenuItem} from "./MenuItem/MenuItem";
import {AppPage} from "../../../app/app-reducer";

export const Menu = ({selectedPage, setPage}: Props) => {

    return (
        <>
            <MenuItem link={'/profile'} svgName={'profile'} active={selectedPage} setActive={setPage}/>
            <MenuItem link={'/dialogs'} svgName={'dialogs'} active={selectedPage} setActive={setPage}/>
            <MenuItem link={'/users'} svgName={'users'} active={selectedPage} setActive={setPage}/>
            <MenuItem link={'/news'} svgName={'news'} active={selectedPage} setActive={setPage}/>
        </>
    )
}

type Props = {
    selectedPage: AppPage,
    setPage: (page: AppPage) => void
}



