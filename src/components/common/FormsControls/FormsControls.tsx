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



// export function createField<FormKeysTyp extends string>(placeholder: string | undefined,
//                             name: FormKeysType,
//                             validators: FieldValidatorType[],
//                             component: React.FC<WrappedFieldProps>,
//                             props = {},
//                             text = ''){
//     return <div>
//         <Field placeholder={placeholder} name={name} validators={validators}
//                component={component} {...props}/> {text}
//     </div>
// }
