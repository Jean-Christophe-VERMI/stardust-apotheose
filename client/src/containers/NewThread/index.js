import { connect } from 'react-redux';

import NewThread from 'src/components/NewThread';

import { newThread, changeValue } from 'src/actions/thread';

const mapStateToProps = (state) => ({
  title: state.threads.title,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  newThread: (value, name) => {
    dispatch(newThread(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewThread);
