import ListRestaurant from '../views/pages/list-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';

const routes = {
  '/': ListRestaurant, // default page
  '/list': ListRestaurant,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': DetailRestaurant,
};

export default routes;
