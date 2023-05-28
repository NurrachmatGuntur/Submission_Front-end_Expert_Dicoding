import ListRestaurant from '../views/pages/list-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/favorite-restaurant': FavoriteRestaurant,
  '/detail-restaurant/:id': DetailRestaurant,
};

export default routes;
