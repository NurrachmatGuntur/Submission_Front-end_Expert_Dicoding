import RestaurantSource from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">List Restaurant</h2>
    <div id="movies" class="movies">
    </div>
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#movies');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
