import trainersCategory from '../assets/imgs/category_trainers.png'
import trausersCategory from '../assets/imgs/category_trausers.png'
import shirtCategory from '../assets/imgs/category_shirt.png'
import hoodieCategory from '../assets/imgs/category_hoodie.png'
import deliveryCategory from '../assets/imgs/category_delivery.png'

export const categories = [
  {
    name: 'Кроссовки',
    type: 'trainers',
    productMinPrice: 8990,
    image: trainersCategory,
  },
  {
    name: 'Штаны',
    type: 'trausers',
    productMinPrice: 10990,
    image: trausersCategory,
  },
  {
    name: 'Футболки',
    type: 'shirts',
    productMinPrice: 4990,
    image: shirtCategory,
  },
  {
    name: 'Толстовки',
    type: 'hoodies',
    productMinPrice: 6990,
    image: hoodieCategory,
  },
  {
    name: 'Доставка по городу',
    type: 'deliveries',
    description: 'Стандартная доставка от <strong>4 дней - 500р</strong><br/>Доставка в постомат или пункт выдачи заказов',
    buttonText: 'Выбрать',
    image: deliveryCategory,
  }
]