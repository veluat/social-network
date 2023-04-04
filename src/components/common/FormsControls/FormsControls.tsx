import React from "react";
import styles from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

const FormControl: React.FC<WrappedFieldProps> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl{...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const Input: React.FC<WrappedFieldProps>  = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl{...props}><input {...input} {...restProps} /> </FormControl>
}

// export const createField = (placeholder: string,
//                             name: string,
//                             validators: FieldValidatorType[],
//                             component: string | React.Component | React.FC,
//                             props = {},
//                             text = '') => (
//     <div>
//         <Field placeholder={placeholder} name={name} validators={validators}
//                component={component} {...props}/> {text}
//     </div>
// )
