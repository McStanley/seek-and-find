import PropTypes from 'prop-types';
import './styles/Overlay.css';

function Overlay({ children }) {
  return <div className="Overlay">{children}</div>;
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Overlay;
