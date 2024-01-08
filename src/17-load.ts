/*
  Como importat modulos que no estan soporatados bajo Typescript

*/

import _ from 'lodash';

const data = [
  {
    username : 'nico',
    role: 'admin',
  },
  {
    username : 'Valnetina',
    role: 'seller',
  },
  {
    username : 'Zulema',
    role: 'seller',
  },
  {
    username : 'Santiago',
    role: 'customer',
  },
]

const rta =_.groupBy(data,  (item) => item.role);
console.log(rta)
