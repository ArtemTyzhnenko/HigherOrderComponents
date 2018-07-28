import React, { Component }  from 'react';

class CommentBox extends Component{
    state = {
        comment: '',
    };

    handleChange = (event) => {
        this.setState({ component: event.target.value });
    };

    handleSubmit = (event) => {
      event.preventDefault();

      this.setState({ component: '' })
    };
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <h1>Comment Box</h1>
            <textarea
                onChange={this.handleChange}
                value={this.state.component}
                cols="30" rows="10"
            />
            <div>
                <button type="submit">Add comment</button>
            </div>
        </form>
    )}
};

export default CommentBox;