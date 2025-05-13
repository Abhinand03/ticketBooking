import Home from '../pages/Home';
import Product from '../pages/Theaters';

export const routes = [
  {
    path: '/',
    element: Home,
    getMeta: () => ({
      title: 'Home | MySite',
      description: 'Welcome to MySite',
      'og:title': 'Home | MySite',
      'og:description': 'Welcome to MySite',
    }),
  },
  {
    path: '/select-theater',
    element: Product,
    getMeta: ({ id }) => {
      const product = {
        name: 'Super Phone',
        description: 'A great phone',
        image: 'https://example.com/phone.jpg',
      };

      return {
        title: `${product.name} | MySite`,
        description: product.description,
        'og:title': product.name,
        'og:description': product.description,
        'og:image': product.image,
        'og:type': 'product',
        'twitter:card': 'summary_large_image',
        'twitter:image': product.image,
      };
    },
  },
];
