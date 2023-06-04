import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';
// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef, no-unused-vars
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    // eslint-disable-next-line no-unused-expressions
    ('Liking A Restaurant', () => {
    });

    // eslint-disable-next-line no-undef
    it('should not add a restaurant again when its already liked', async () => {
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: 1,
        },
      });
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

      // Tambahkan film dengan ID 1 ke daftar film yang disukai
      await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
      // Simulasikan pengguna menekan tombol suka film
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      // tidak ada film yang ganda
      // eslint-disable-next-line no-undef
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
      FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    // menggunakan metode xit, bukan it
    // eslint-disable-next-line no-undef
    it('should not add a restaurant when it has no id', async () => {
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {},
      });
      await TestFactories.createLikeButtonPresenterWithRestaurant({});

      document.querySelector('#likeButton').dispatchEvent(new Event('click'));

      // eslint-disable-next-line no-undef
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });
});
