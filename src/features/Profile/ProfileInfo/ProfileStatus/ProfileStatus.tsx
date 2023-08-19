import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        isEdit: false,
        status: this.props.status
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    toggleMode = () => {
        if (this.state.isEdit) {
            this.update()
        }
        this.setState({
            isEdit: !this.state.isEdit
        })

    }

    update = () => {
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {!this.state.isEdit ?
                    <div onDoubleClick={this.toggleMode}><span>{this.props.status || 'no status'}</span></div> :
                    <input onBlur={this.toggleMode} onChange={this.onStatusChange} autoFocus
                           value={this.state.status}/>}
            </div>
        )
    }
}

export default ProfileStatus;

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

