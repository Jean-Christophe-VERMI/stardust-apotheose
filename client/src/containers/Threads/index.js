import { connect } from 'react-redux';
import { fetchThreads } from 'src/actions/thread';
import Threads from 'src/components/Forum/Threads';

import { getThreadBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  threads: getThreadBySlug(state.threads.thread, ownProps.match.params.slug),
});

const mapDispatchToProps = (store) => ({
  fetchThreads: () => {
    store.dispatch(fetchThreads());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Threads);
