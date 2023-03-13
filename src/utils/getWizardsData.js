import Wizard1 from '../assets/wizard1.png';
import Wizard2 from '../assets/wizard2.png';
import Wizard3 from '../assets/wizard3.png';

function getWizardsData() {
  const wizardsData = [
    {
      id: 1,
      img: Wizard1,
      active: true,
    },
    {
      id: 2,
      img: Wizard2,
      active: true,
    },
    {
      id: 3,
      img: Wizard3,
      active: true,
    },
  ];

  return wizardsData;
}

export default getWizardsData;
