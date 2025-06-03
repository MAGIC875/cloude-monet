import Nicoise from './images/2.webp'
import Escargots from './images/1.webp'

import Bouillabaisse from './images/3.webp'
import Soupe from './images/4.webp'
import Coqauvin from './images/5.webp'
import Tartare from './images/6.webp'

import TarteTatin from './images/7.webp'
import BabaAuRhum from './images/8.jpg'

import Wine1 from './images/9.webp'
import Wine2 from './images/10.webp'
import Wine3 from './images/11.webp'
import Wine4 from './images/12.webp'


const menu = {
    salats:[{
        id:1,
        description:
        'Cейчас в это сложно поверить, но когда-то это был довольно бедный регион, поэтому повседневный местный салат включал лишь помидоры с луком и анчоусами, заправленные оливковым маслом.',
        title: 'Салат нисуаз',
        src: Nicoise,
        type: 'salat',
        cost: 1025.5,
    },
    {
        id:2,
        description:
        'Согласно исследованиям ученых, улиток употребляли в пищу уже в доисторические времена. Однако современный рецепт был придуман лишь в 1814 году.',
        title: 'Улитки по-бургундски',
        src: Escargots,
        type: 'salat',
        cost: 925.0,
    },],



    main:[{
        id:3,
        description:
        'Самое известное марсельское блюдо, как и сам город, ведет свою историю от древних греков-фокейцев, основавших здесь колонию в VI веке до нашей эры.',
        title: 'Буйабес',
        src: Bouillabaisse,
        type: 'main',
        cost: 2025.0,
    },
    {
        id:4,
        description:
        'Луковый суп известен со времен Древнего Рима. Там его считали едой для бедняков, ведь лук легко выращивать и распространен он повсеместно.',
        title: 'Луковый суп',
        src: Soupe,
        type: 'main',
        cost: 1325.0,
    },
    {
        id:5,
        description:
        'Многие традиционные французские рецепты возникли из-за необходимости сделать дешевые продукты вкусными.',
        title: 'Петух в вине',
        src: Coqauvin,
        type: 'main',
        cost: 925.0,
    },
    {
        id:6,
        description:
        'Немало иностранных туристов оказывались на месте Мистера Бина, когда, заказав Steak tartare и ожидая аппетитный стейк, получали мощную порцию сырого рубленого мяса, которое почему-то подается с картофелем фри.',
        title: 'Тартар из говядины',
        src: Tartare,
        type: 'main',
        cost: 1052.0,
    },
],
desserts:[{
    id:7,
    description:
    'Тартифлет был вдохновлен традиционным блюдом под названием La pela – гратеном из картофеля, лука и сыра, приготовленным на сковороде с очень длинной ручкой.',
    title: 'Тартифлет',
    src: TarteTatin,
    type: 'dessert',
    cost: 1405.5,
},
{
    id:8,
    description:
    'Ромовая баба — это маленький дрожжевой кекс, который после выпечки пропитывается сиропом с ромом и обычно подаётся со взбитыми сливками, заварным кремом или фруктами.',
    title: 'Ромовая баба',
    src: BabaAuRhum,
    type: 'dessert',
    cost: 900.25,
},],

wines:[{
    id:9,
    description:
    'От Domaines Bunan',
    title: 'Belouve Rosé',
    src: Wine1,
    type: 'wine',
    cost: 13400.0,
},{
    id:10,
    description:
    'От Domaines Dominique Piron',
    title: 'Coteaux Bourguignons Blanc',
    src: Wine2,
    type: 'wine',
    cost: 21000.0,
},{
    id:11,
    description:
    'Clos Mireille Blanc de Blancs из семильона и ролля',
    title: 'Domaines Ott*',
    src: Wine3,
    type: 'wine',
    cost: 11000.0,
},{
    id:12,
    description:
    'От Domaine Bott-Geyl',
    title: 'Pinot Gris Les Elements',
    src: Wine4,
    type: 'wine',
    cost: 12000.0,
}]

}
export default menu;