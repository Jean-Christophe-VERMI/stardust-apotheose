import { connect } from 'react-redux';

import Forum from 'src/components/Forum';

const mapStateToProps = (state) => ({
  /*author: state.forum.author,
  active: state.forum.active,
  title: state.forum.title,*/
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
