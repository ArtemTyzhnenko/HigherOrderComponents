import React, {Component} from 'react';

class CommentBox extends Component {
    state = {
        comment: '',
    };

    handleChange = event => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.comment.length > 0 ) {
            this.props.saveComment(this.state.comment);
            this.setState({comment: ''});
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Comment Box</h1>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.comment}
                />
                <div>
                    <button type="submit">Add comment</button>
                </div>
            </form>
        )
    }
};

export default CommentBox;