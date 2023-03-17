import Wizard1 from '../assets/wizard1.png';
import Wizard2 from '../assets/wizard2.png';
import Wizard3 from '../assets/wizard3.png';
import Wizard4 from '../assets/wizard4.png';
import Wizard5 from '../assets/wizard5.png';
import Wizard6 from '../assets/wizard6.png';
import Wizard7 from '../assets/wizard7.png';
import Wizard8 from '../assets/wizard8.png';

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
  {
    id: 4,
    img: Wizard4,
    position: {
      top: 0.61,
      bottom: 0.675,
      left: 0.102,
      right: 0.135,
    },
    active: true,
  },
  {
    id: 5,
    img: Wizard5,
    position: {
      top: 0.795,
      bottom: 0.848,
      left: 0.26,
      right: 0.285,
    },
    active: true,
  },
  {
    id: 6,
    img: Wizard6,
    position: {
      top: 0.765,
      bottom: 0.827,
      left: 0.88,
      right: 0.901,
    },
    active: true,
  },
  {
    id: 7,
    img: Wizard7,
    position: {
      top: 0.719,
      bottom: 0.772,
      left: 0.78,
      right: 0.809,
    },
    active: true,
  },
  {
    id: 8,
    img: Wizard8,
    position: {
      top: 0.011,
      bottom: 0.05,
      left: 0.418,
      right: 0.461,
    },
    active: true,
  },
];

function getWizardsData() {
  const randomIndices = [];

  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * wizardsData.length);

    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomWizards = randomIndices.map((index) => wizardsData[index]);

  return randomWizards;
}

export default getWizardsData;
