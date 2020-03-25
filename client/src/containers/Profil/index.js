import { connect } from 'react-redux';

import Profil from 'src/components/UserProfil/Profil';


const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
