import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Restoran Yang Kamu Suka</h2>
    <div id="movies" class="movies">

    </div>
  </div>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#movies');
    restaurants.forEach((movie) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default FavoriteRestaurant;
