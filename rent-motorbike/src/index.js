import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class UserDetail extends React.Component {
    render() {
        return (
            <div className="User">
                <p>User name: {this.props.username}</p>
                <p>Emaile: {this.props.email}</p>
            </div>
        );
    }
}

class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <UserDetail username={this.props.username} email={this.props.email} />
                <div className="Infor">
                    <p>Other information: {this.props.otherInfo}</p>
                </div>
            </div>
        );
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }
    incrementCounter() {
        this.setState(
            (prevState, props) => ({
                seconds: prevState.seconds + 1
            })
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.incrementCounter(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Seconds: {this.state.seconds}</h1>
            </div>
        )
    }
}



class InfoUser extends React.Component {
    formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    }

    user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    render() {
        return (
            <h1>
                Hello, {this.formatName(this.user)}!
            </h1>
        )
    }
}


// const element = <UserInfo username="Bao Dat" email="datdang0301@gmail.com" otherInfo="I want to a photographer" />

ReactDOM.render(<InfoUser/>, document.getElementById("root"))

