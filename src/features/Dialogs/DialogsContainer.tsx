import React from 'react';
import {
    addMessage,
    DialogStateType
} from "./dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {AppPage, setPage} from "../../app/app-reducer";
import {IMessageFormInput} from "./Messages/AddMessageForm";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    addMessage,
    setPage
}))(Dialogs)

export type mapStateToPropsType = {
    dialogPage: DialogStateType
}

export type mapDispatchToPropsType = {
    addMessage: (message: IMessageFormInput) => void
    setPage: (setPage: AppPage) => void
}

export type CommonDialogsType = mapStateToPropsType & mapDispatchToPropsType

export default DialogsContainer