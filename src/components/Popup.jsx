import { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Popup.css';

function Popup({ position, wizardsData, checkSelection, boardRef }) {
  const [popupWidth, setPopupWidth] = useState(0);
  const [popupHeight, setPopupHeight] = useState(0);
  const popupRef = useRef(null);

  useLayoutEffect(() => {
    const { width, height } = popupRef.current.getBoundingClientRect();
    setPopupWidth(width);
    setPopupHeight(height);
  }, []);

  const styles = {
    left: `${position.x * 100}%`,
    top: `${position.y * 100}%`,
    transform: '',
  };

  // Check if popup is too close to the right or bottom edge of the board
  const boardWidth = boardRef.current.offsetWidth;
  const boardHeight = boardRef.current.offsetHeight;
  const maxX = boardWidth - popupWidth;
  const maxY = boardHeight - popupHeight;

  if (position.x * boardWidth > maxX) {
    styles.transform += `translateX(-${popupWidth}px)`;
  }
  if (position.y * boardHeight > maxY) {
    styles.transform += `translateY(-${popupHeight}px)`;
  }

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
    <div className="Popup" style={styles} ref={popupRef}>
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
  boardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Popup;
