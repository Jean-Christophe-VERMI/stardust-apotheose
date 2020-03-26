import { connect } from 'react-redux';

import Forum from 'src/components/Forum';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
