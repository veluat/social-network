import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";

type MapStatePropsType = {
    profile: string | null
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }
        render() {
            return (
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
            );
        };
    }

    let
    mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        profile: state.profilePage.profile
    });

    let
    WithUrlDataContainerComponent = withRouter(ProfileContainer);

    export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);