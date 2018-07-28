import React from 'react';
import { connect } from 'react-redux';
import CommentBox from '../../components/CommentBox/CommentBox';

import { saveComment } from '../../reducers/comments/actions';


export default connect(null, { saveComment })(CommentBox);