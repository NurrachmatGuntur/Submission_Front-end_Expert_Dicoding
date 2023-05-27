import ListMakanan from '../views/pages/list-resto';
import FavoriteFood from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListMakanan, // default page
  '/list-resto': ListMakanan,
  '/favorite': FavoriteFood,
  '/detail/:id': Detail,
};

export default routes;
