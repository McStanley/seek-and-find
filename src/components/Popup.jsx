import PropTypes from 'prop-types';
import './styles/Popup.css';

function Popup({ position, wizardsData, checkSelection }) {
  const styles = {
    left: `${position.x * 100}%`,
    top: `${position.y * 100}%`,
  };

  const handleClick = (id) => {
    checkSelection(id);
  };

  const activeWizards = wizardsData.filter((wizard) => wizard.active);

  const entries = activeWizards.map((wizard) => (
    <button
      className="Popup-entry"
      type="button"
      key={wizard.id}
      onClick={() => handleClick(wizard.id)}
    >
      <img src={wizard.img} alt="" />
    </button>
  ));

  return (
    <div className="Popup" style={styles}>
      {entries}
    </div>
  );
}

Popup.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  wizardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      position: PropTypes.shape({
        top: PropTypes.number.isRequired,
        bottom: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        right: PropTypes.number.isRequired,
      }).isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
  checkSelection: PropTypes.func.isRequired,
};

export default Popup;
