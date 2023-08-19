import styles from "../ProfileInfo.module.scss";
import React from "react";

export const Contact = ({contactTitle, contactValue}: ContactProps) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

type ContactProps = {
    contactTitle: string
    contactValue: string
}