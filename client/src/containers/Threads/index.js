import { connect } from 'react-redux';
import Threads from 'src/components/Forum/Threads';

import { getThreadBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  threads: getThreadBySlug(state.threads.list, ownProps.match.params.slug),
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Threads);
