import { connect } from 'react-redux';

import Register from 'src/components/Register';

import { sendUser, modifyField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  name: state.register.name,
  email: state.register.email,
  password: state.register.password,
  city: state.register.city,
});

const mapDispatchToProps = (dispatch) => ({
  sendUser: (value, name) => {
    dispatch(sendUser(value, name));
  },
  changeValue: (value, name) => {
    dispatch(modifyField(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
