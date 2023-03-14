import Wizard1 from '../assets/wizard1.png';
import Wizard2 from '../assets/wizard2.png';
import Wizard3 from '../assets/wizard3.png';

function getWizardsData() {
  const wizardsData = [
    {
      id: 1,
      img: Wizard1,
      position: {
        top: 0.58,
        bottom: 0.636,
        left: 0.572,
        right: 0.604,
      },
      active: true,
    },
    {
      id: 2,
      img: Wizard2,
      position: {
        top: 0.795,
        bottom: 0.846,
        left: 0.603,
        right: 0.626,
      },
      active: true,
    },
    {
      id: 3,
      img: Wizard3,
      position: {
        top: 0.259,
        bottom: 0.308,
        left: 0.854,
        right: 0.88,
      },
      active: true,
    },
  ];

  return wizardsData;
}

export default getWizardsData;
