import React from "react";
import styles from "./FormsControls.module.css"
import {Field, WrappedFieldProps} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}: WrappedFieldProps) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}><input {...input} {...restProps} /> </FormControl>
}

/*
export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validators={validators}
               component={component} {...props}/> {text}
    </div>
)*/
