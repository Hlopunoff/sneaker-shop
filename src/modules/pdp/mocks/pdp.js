import mockPic1 from './images/pdp_pic1.png'
import mockPic2 from './images/pdp_pic2.png'
import mockPic3 from './images/pdp_pic3.png'
import mockPic4 from './images/pdp_pic4.png'

export const mockProduct = {
  id: 2,
  gallery: [
    mockPic1,
    mockPic2,
    mockPic3,
    mockPic4,
  ],
  name: 'Толстовка Jordan Flight Fleece',
  prices: {
    current: 14990,
    old: 27999,
  },
  configuration: {
    sizes: {
      title: 'Размер',
      type: 'size',
      values: [
      {
        value: 39,
        isAvailable: true,
      },
      {
        value: 41,
        isAvailable: true,
      },
      {
        value: 42,
        isAvailable: false,
      },
      {
        value: 45,
        isAvailable: true,
      },
    ]
    },
    colors: {
      title: 'Цвет',
      type: 'color',
      values: [
      {
        value: 'black',
        color: '#000',
      },
      {
        value: 'pink',
        color: '#d1a0a0',
      },
      {
        value: 'blue',
        color: '#96aed3',
      },
      {
        value: 'green',
        color: '#b1c6b1',
      },
      {
        value: 'yellow',
        color: '#F1BF5D',
      },
    ]
    },
  },
  productInfo: [
    {
      title: 'О товаре',
      details: [
        {
          title: 'Материал',
          info: 'Хлопок',
        },
        {
          title: 'Состав материала',
          info: '85% хлопок, 10% полиэстр, 5% эластан',
        },
        {
          title: 'Производитель',
          info: 'Jordan',
        },
      ]
    },
    {
      title: 'Описание',
      details: 'Классический силуэт кроссовок ST Runner v3, дополненный функциональной отделкой задника, не оставит равнодушным истинного ценителя спортивного стиля.'
    }
  ]
}