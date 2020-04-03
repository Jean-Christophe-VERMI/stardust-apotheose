import { connect } from 'react-redux';
import { deleteComment } from 'src/actions/thread';
import Comments from 'src/components/Comments';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => {
    dispatch(deleteComment(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
