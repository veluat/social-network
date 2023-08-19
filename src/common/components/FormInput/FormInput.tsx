import React from 'react';
import styles from './FormInput.module.scss'

// @ts-ignore
export function FormInput({register, name, type, label, id, isNested}) {
    if (isNested) {
        name = `contacts.${name}`
    }

    const styleForInput = type === 'input' ? styles.formInput : styles.formCheckBox
    return <>
        <label htmlFor={name}><h3>{label}:</h3></label>
        <input
            className={styleForInput}
            id={id}
            name={name}
            type={type}
            placeholder={label}
            {...register(name)}
        />
    </>
}

