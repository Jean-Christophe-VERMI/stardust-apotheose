import { connect } from 'react-redux';
import Threads from 'src/components/Forum/Threads';

const mapStateToProps = (state) => ({
  list: state.threads.list
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Threads);
