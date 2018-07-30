import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../reducers/auth/actions'
import CommentBoxContainer from '../containers/CommentBoxContainer/CommentBoxContainer';
import CommentListContainer from '../containers/CommentListContainer/CommentListContainer';

import './App.css';

class App extends Component {

    renderButton = () =>{
        const { changeAuth } = this.props;
        if(this.props.auth){
            return <button onClick={() => changeAuth()}>Sing Out</button>
        } else {
            return <button onClick={() => changeAuth()}>Sing In</button>
        }
    };

    renderHeader = () =>{
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>
                    { this.renderButton() }
                </li>
            </ul>
        )
    };

    render() {
        return (
            <div className="App">
                { this.renderHeader() }
                <Route path='/post' component={ CommentBoxContainer } />
                <Route path='/' exact component={ CommentListContainer }/>
            </div>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    return {
        auth: auth.auth,
    };
};

export default connect(mapStateToProps, { changeAuth })(App);
