import React from 'react';

const CommentList = ({ comments }) => {

    const renderComments = () =>{
        return comments.map(comment =>{
            return <li key={comment}>{ comment }</li>
        })
    };

    return (
      <div>
          <h3>Comment List</h3>
          <ul>
              { renderComments() }
          </ul>
      </div>
    )
};

export default CommentList;