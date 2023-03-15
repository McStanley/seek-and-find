function isWizardFound(clickPosition, wizardPosition) {
  return (
    clickPosition.x > wizardPosition.left &&
    clickPosition.x < wizardPosition.right &&
    clickPosition.y > wizardPosition.top &&
    clickPosition.y < wizardPosition.bottom
  );
}

export default isWizardFound;
