import React, {useState} from 'react';
import styles from "./Paginator.module.scss";
import {UsersType} from "../../../features/Users/Users";
import {SvgSelector} from "../svgSelector/svgSelector";

export const Paginator = ({totalUsersCounter, pageSize, currentPage, onPageChanged}: Props) => {
    let pagesCount = Math.ceil(totalUsersCounter / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionSize = 10
    const initialPortionNumber = 1

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(initialPortionNumber)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const isDisabledDoubleLeft = portionNumber === 1
    const isDisabledLeft = portionNumber <= 1
    const isDisabledRight = !(portionCount > portionNumber)
    const isDisabledDoubleRight = portionNumber === portionCount

    return (
        <div>
            <button disabled={isDisabledDoubleLeft} onClick={() => {
                setPortionNumber(1)
            }} className={styles.arrowDoubleLeft}>
                <SvgSelector svgName={'arrowDoubleLeft'}/>
            </button>

            <button disabled={isDisabledLeft} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} className={styles.arrowLeft}>
                <SvgSelector svgName={'arrowLeft'}/>
            </button>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => <span key={i}
                                     className={currentPage === p ? `${styles.selectedPage} ${styles.page}` : styles.page}
                                     onClick={() => onPageChanged(p)}>{p}</span>)}

            <button disabled={isDisabledRight} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} className={styles.arrowRight}>
                <SvgSelector svgName={'arrowRight'}/>
            </button>

            <button disabled={isDisabledDoubleRight} onClick={() => {
                setPortionNumber(portionCount)
            }} className={styles.arrowDoubleRight}>
                <SvgSelector svgName={'arrowDoubleRight'}/>
            </button>

        </div>
    )
}

type Props = Pick<UsersType, 'pageSize' | 'totalUsersCounter' | 'currentPage'> & { onPageChanged: (p: number) => void }

