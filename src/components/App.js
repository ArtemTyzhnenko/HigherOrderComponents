import React, {Component} from 'react';
import './App.css';
import CommentBoxContainer from '../containers/CommentBoxContainer/CommentBoxContainer';
import CommentListContainer from '../containers/CommentListContainer/CommentListContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CommentBoxContainer />
                <CommentListContainer />
            </div>
        );
    }
}

export default App;
