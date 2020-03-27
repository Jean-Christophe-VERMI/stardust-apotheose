import { connect } from 'react-redux';

import { getConstellations } from 'src/actions/constellations';
import Constellations from 'src/components/Constellations';

const mapStateToProps = state => ({
  constellations: state.constellations,
});

const mapDispatchToProps = dispatch => ({
  getConstellations: () => dispatch(getConstellations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Constellations);
