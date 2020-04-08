// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Nav from 'src/components/Nav';
import { toggleOpenLeft, toggleOpenRight } from 'src/actions/nav';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  openLeft: state.nav.openLeft,
  openRight: state.nav.openRight,
});

// modification
const mapDispatchToProps = (dispatch) => ({
  toggleLeft: () => {
    dispatch(toggleOpenLeft());
  },
  toggleRight: () => {
    dispatch(toggleOpenRight());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
