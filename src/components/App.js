import React, {Component} from 'react';
import './App.css';
import CommentBox from './CommentBox/CommentBox';
import CommentList from './CommentList/CommentList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CommentBox />
                <CommentList />
            </div>
        );
    }
}

export default App;
