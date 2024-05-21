import trainersCategory from '../assets/imgs/category_trainers.png'
import deliveryCategory from '../assets/imgs/category_delivery.png'

export const categories = [
  {
    name: 'Кроссовки',
    type: 'trainers',
    productMinPrice: 8990,
    image: trainersCategory,
    link: 'catalog/category/sneakers'
  },
  {
    name: 'Беговые',
    type: 'trausers',
    productMinPrice: 10990,
    image: 'https://a.lmcdn.ru/img600x866/R/T/RTLADC593802_23493771_5_v1.jpg',
    link: 'catalog/category/running'
  },
  {
    name: 'Баскетбол',
    type: 'shirts',
    productMinPrice: 4990,
    image: 'https://a.lmcdn.ru/img600x866/R/T/RTLADL691001_23187583_3_v1.jpg',
    link: 'catalog/category/basketball'
  },
  {
    name: 'Теннис',
    type: 'hoodies',
    productMinPrice: 6990,
    image: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD285201_22047155_2_v1.jpg',
    link: 'catalog/category/tennis'
  },
  {
    name: 'Доставка по городу',
    type: 'deliveries',
    description: 'Стандартная доставка от <strong>4 дней - 500р</strong><br/>Доставка в постомат или пункт выдачи заказов',
    buttonText: 'Выбрать',
    image: deliveryCategory,
  }
]