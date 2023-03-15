function isGameOver(wizardsData) {
  const activeWizards = wizardsData.filter((wizard) => wizard.active);
  return activeWizards.length === 0;
}

export default isGameOver;
