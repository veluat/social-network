import s from "./Paginator.module.css"
import React, {useState} from "react";

type PaginatorType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize: number;
}

export const Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize;



    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>PREV</button> }
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p, index) => {
                return <span key={index} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })
            }
            {portionCount > portionNumber &&
                <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>NEXT</button> }
        </div>
    )
}