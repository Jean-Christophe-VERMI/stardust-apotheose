import { connect } from 'react-redux';
import { toggleOpenModify, changeValue, changeUserInfos } from 'src/actions/user';
import Profil from 'src/components/Profil';


const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  city: state.auth.city,
  toggleOpen: state.auth.toggleOpen,
  newName: state.auth.newName,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    dispatch(toggleOpenModify());
  },
  changeField: (name, value) => {
    dispatch(changeValue(name, value));
  },
  changeUserInfos: (user) => {
    dispatch(changeUserInfos(user));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
