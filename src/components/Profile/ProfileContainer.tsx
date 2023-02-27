import React from 'react';
import {setUserProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";

type MapStatePropsType = {
    profile: string | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: string | null) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render(){
    return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    );
};
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);