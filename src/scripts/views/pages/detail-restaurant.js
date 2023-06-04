import RestaurantSource from '../../data/restaurant-db';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
    <div id="likeButtonContainer"></div>
    <div id="review"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#movie');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewContainer = document.querySelector('#review');
    reviewContainer.innerHTML += createReviewTemplate(restaurant.customerReviews);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description,
        city: restaurant.city,
      },
    });
  },
};
export default DetailRestaurant;
