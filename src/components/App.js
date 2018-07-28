import React, {Component} from 'react';
import './App.css';
import CommentBoxContainer from '../containers/CommentBoxContainer/CommentBoxContainer';
import CommentList from './CommentList/CommentList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CommentBoxContainer />
                <CommentList />
            </div>
        );
    }
}

export default App;
