import {SubmitHandler, useForm} from "react-hook-form";
import styles from "./FormControls.module.scss";
import React from "react";
import {commonType} from "../../../features/Login/Login";
import {InputLoginForm} from "./LoginFormInput/LoginFormInput";
import {required} from "../../utils/validators/validators";

export const LoginForm = (props: commonType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            login: '',
            password: '',
            rememberMe: false,
            captchaUrl: null
        }
    })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const {login, password, rememberMe, captchaUrl} = data
        props.login(login, password, rememberMe, captchaUrl)
    }

    const validateObj = {
        validate: {
            required
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputLoginForm name={'login'} type={'input'} label={'Email'} register={register} svg={'login'}
                                validationSchema={validateObj} error={errors?.login}/>
                {errors?.login && <div className={styles.errorMessageColor}>{errors.login.message}</div>}
            </div>
            <div>
                <InputLoginForm name={'password'} type={'password'} label={'Password'} register={register}
                                svg={'password'} validationSchema={validateObj} error={errors?.password}/>
                {errors?.password && <div className={styles.errorMessageColor}>{errors.password.message}</div>}
            </div>
            <div className={styles.rememberMe}>
                <input type="checkbox" {...register('rememberMe')}/>
                <span>Remember me</span>
            </div>
            {props.isSubmit && <div className={styles.errorMessageColor}>{props.errorMessage}</div>}

            {props.captchaUrl && <div>
                <img src={props.captchaUrl} className={styles.captcha} alt={'captcha'}/>
            </div>}

            {props.captchaUrl && <div>
                <InputLoginForm name={'captchaUrl'} type={'text'} label={'captchaUrl'} register={register}
                                svg={'captcha'} validationSchema={validateObj} error={errors?.captchaUrl}/>
                {errors?.captchaUrl && <div className={styles.errorMessageColor}>{errors.captchaUrl.message}</div>}
            </div>}

            <div>
                <button className={styles.loginButton}>Login</button>
            </div>
        </form>
    )
}

export type FormData = {
    login: string
    password: string
    rememberMe: boolean
    captchaUrl: string | null
}