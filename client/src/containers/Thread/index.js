import { connect } from 'react-redux';
import Thread from 'src/components/Thread';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  display: state.threads.display,
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Thread);
