import CONFIG from '../../globals/config';

// miss
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="movie__poster lazyload">
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Kota Restaurant</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat Restaurant</h4>
    <p>${restaurant.address}</p>
    <h4>Rating Restoran
    <p>⭐️ ${restaurant.rating} </p>
    <h4>Nama Makanan</h4>
    <div id="makanan">
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          </div>
    <h4>Nama Minuman</h4>
    <div id="minuman">
    <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
  </div>
  </div>
  <div class="movie__overview">
  <h4>Deskripsi Restaurant</h4>
  <p>${restaurant.description}</p>
  </div>
`;
const createReviewTemplate = (restaurant) => {
  let reviewElement = '';
  restaurant.forEach((review) => {
    reviewElement += `
    <div class="review-container">
      <div class="review-head">
        <p class="name">${review.name}, ${review.date}</p>
      </div>
      <p class="review-body">${review.review}</p>
    </div>`;
  });
  return reviewElement;
};
const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} Picture"}">
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
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate, createReviewTemplate,
};
