import { connect } from 'react-redux';

import Profil from 'src/components/Profil';


const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  id: state.auth.id,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
