import React from 'react';
import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

/*const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
        (store)=> {
            const sendMessage = () => store.dispatch(sendMessageAC())
            const updateMessageText = (text: string) => {
                store.dispatch(updateMessageTextAC(text))
            }
            return <Dialogs updateMessageText={updateMessageText}
                            sendMessage={sendMessage}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        sendMessage: () => {dispatch(sendMessage())},
        updateMessageText: (text: string) => {dispatch(updateMessageText(text))
    }
    }
}*/
const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {sendMessage })(Dialogs));

export default DialogsContainer;