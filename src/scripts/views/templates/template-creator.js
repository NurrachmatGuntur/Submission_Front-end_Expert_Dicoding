import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Kota Restaurant</h4>
    <p>${restaurant.city}</p>
    <h4>Duration</h4>
    <p>${restaurant.rating} minutes</p>
  </div>
  <div class="movie__overview">
  <h4>Deskripsi Restaurant</h4>
  <p>${restaurant.description}</p>
  </div>
`;
const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} Picture"}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description.substring(
    0,
    100,
  )}.......</p>
    </div>
  </div>
`;
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
