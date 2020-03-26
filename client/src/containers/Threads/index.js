import { connect } from 'react-redux';
import Threads from 'src/components/Forum/Threads';

import { getThreadBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  thread: getThreadBySlug(state.threads.thread, ownProps.match.params.slug),
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Threads);
