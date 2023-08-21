require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'SWORDS', sortOrder: 10},
    {name: 'BLASTERS', sortOrder: 20},
    {name: 'MISCELLANEOUS', sortOrder: 30},
    {name: 'POTIONS', sortOrder: 40},
    {name: 'STAFFS', sortOrder: 50},
    {name: 'SHIELDS', sortOrder: 60},
    {name: 'LEGENDARY', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Struggle Sword', image: 'https://i.imgur.com/AgToHJj.png', desc: 'Plastic but MIGHTY', category: categories[0], price: 5.95},
    {name: 'Finns Sword', image: 'https://i.imgur.com/UXUntWa.png', category: categories[0], price: 6.95},
    {name: 'NIGHTMARE Sword', image: 'https://i.imgur.com/JcceHTo.png', category: categories[0], price: 3.95},
    {name: 'Super Soaker', image: 'https://i.imgur.com/ltlRjgV.png', category: categories[1], price: 14.95},
    {name: 'MegaBuster', image: 'https://i.imgur.com/KYIkYpm.png', category: categories[1], price: 13.95},
    {name: 'PewPewD2', image: 'https://i.imgur.com/vPSjGvE.jpg', category: categories[1], price: 25.95},
    {name: 'Red Shell', image: 'https://i.imgur.com/m7xcp13.png', category: categories[2], price: 1.95},
    {name: 'Green Shell', image: 'https://i.imgur.com/jxmMm5C.png', category: categories[2], price: 4.95},
    {name: 'Potion', image: 'https://i.imgur.com/kC9rWKQ.png', category: categories[3], price: 3.95},
    {name: 'Super Potion', image: 'https://i.imgur.com/8luGXgZ.png', category: categories[3], price: 7.95},
    {name: 'Hyper Potion', image: 'https://i.imgur.com/0MD62Lm.png', category: categories[3], price: 1.95},
    {name: 'Mages Staff', image: 'https://i.imgur.com/WnpMGPB.png', category: categories[4], price: 2.95},
    {name: 'WingNight Beatem Up Sticks', image: 'https://i.imgur.com/ka6dUqI.png', category: categories[4], price: 3.95},
    {name: 'Wooden Shield', image: 'https://i.imgur.com/2mThvxp.png', category: categories[5], price: 1.95},
    {name: 'Links Shield', image: 'https://i.imgur.com/DrvAJho.png', category: categories[5], price: 0.95},
    {name: 'Roses Shield', image: 'https://i.imgur.com/iUTMAs2.png', category: categories[5], price: 2.95},
    {name: 'Goofy Shield', image: 'https://i.imgur.com/H3fyXcZ.png', category: categories[5], price: 3.95},
    {name: 'GUNBLADE', image: 'https://i.imgur.com/5ltv6EI.png', category: categories[6], price: 0.95},
    {name: 'KEYBLADE', image: 'https://i.imgur.com/4XjLkDO.png', category: categories[6], price: 0.95},
    {name: 'LIGHTSABER', image: 'https://i.imgur.com/thHJxZY.png', category: categories[6], price: 8.95},
  ]);

  console.log(items)

  process.exit();

})();