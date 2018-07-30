import { connect } from 'react-redux';
import CommentList from '../../components/CommentList/CommentList';

const mapStateToProps = ({ comments }) => {
    return {
        comments: comments.comments,
    };
};

export default connect(mapStateToProps)(CommentList);