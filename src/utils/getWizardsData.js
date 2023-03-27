import Wizard1 from '../assets/wizard1.png';
import Wizard2 from '../assets/wizard2.png';
import Wizard3 from '../assets/wizard3.png';
import Wizard4 from '../assets/wizard4.png';
import Wizard5 from '../assets/wizard5.png';
import Wizard6 from '../assets/wizard6.png';
import Wizard7 from '../assets/wizard7.png';
import Wizard8 from '../assets/wizard8.png';
import Wizard9 from '../assets/wizard9.png';
import Wizard10 from '../assets/wizard10.png';
import Wizard11 from '../assets/wizard11.png';
import Wizard12 from '../assets/wizard12.png';
import Wizard13 from '../assets/wizard13.png';
import Wizard14 from '../assets/wizard14.png';
import Wizard15 from '../assets/wizard15.png';
import Wizard16 from '../assets/wizard16.png';

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
  {
    id: 9,
    img: Wizard9,
    position: {
      top: 0.222,
      bottom: 0.272,
      left: 0.057,
      right: 0.087,
    },
    active: true,
  },
  {
    id: 10,
    img: Wizard10,
    position: {
      top: 0.35,
      bottom: 0.397,
      left: 0.165,
      right: 0.195,
    },
    active: true,
  },
  {
    id: 11,
    img: Wizard11,
    position: {
      top: 0.685,
      bottom: 0.752,
      left: 0.905,
      right: 0.932,
    },
    active: true,
  },
  {
    id: 12,
    img: Wizard12,
    position: {
      top: 0.907,
      bottom: 0.96,
      left: 0.606,
      right: 0.644,
    },
    active: true,
  },
  {
    id: 13,
    img: Wizard13,
    position: {
      top: 0.106,
      bottom: 0.16,
      left: 0.633,
      right: 0.669,
    },
    active: true,
  },
  {
    id: 14,
    img: Wizard14,
    position: {
      top: 0.684,
      bottom: 0.732,
      left: 0.404,
      right: 0.432,
    },
    active: true,
  },
  {
    id: 15,
    img: Wizard15,
    position: {
      top: 0.822,
      bottom: 0.868,
      left: 0.126,
      right: 0.15,
    },
    active: true,
  },
  {
    id: 16,
    img: Wizard16,
    position: {
      top: 0.916,
      bottom: 0.968,
      left: 0.31,
      right: 0.336,
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
