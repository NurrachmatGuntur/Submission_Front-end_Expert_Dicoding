import RestaurantSource from '../../data/restaurant-db';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#movie');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default DetailRestaurant;
