import { connect } from 'react-redux';
import { dispatchCommentInfos, deleteComment } from 'src/actions/thread';
import Comments from 'src/components/Comments';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({

  dispatchCommentInfos: (id, author) => {
    dispatch(dispatchCommentInfos(id, author));
  },

  deleteComment: () => {
    dispatch(deleteComment());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
