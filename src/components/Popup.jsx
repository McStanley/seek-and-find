import PropTypes from 'prop-types';
import './styles/Popup.css';

function Popup({ position, wizardsData }) {
  const styles = {
    left: `${position.x * 100}%`,
    top: `${position.y * 100}%`,
  };

  const activeWizards = wizardsData.filter((wizard) => wizard.active);

  const entries = activeWizards.map((wizard) => (
    <article className="Popup-entry" key={wizard.id}>
      <img src={wizard.img} alt="" />
    </article>
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
};

export default Popup;
