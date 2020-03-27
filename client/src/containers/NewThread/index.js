import { connect } from 'react-redux';

import NewThread from 'src/components/NewThread';

import { newThread, changeField } from 'src/actions/thread';

const mapStateToProps = (state) => ({
  title: state.threads.title,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value) => {
    dispatch(changeField(value));
  },
  newThread: (value) => {
    dispatch(newThread(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewThread);
