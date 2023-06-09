const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.movie-item__content a', 25);

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.movie-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 25);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.movie-item');

  // eslint-disable-next-line no-undef
  const likedRestaurant = locate('.movie-item__content a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.movie-item__content a');

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.movie-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.movie-item');

  // eslint-disable-next-line no-undef
  const likedRestaurant = locate('.movie-item__content a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.waitForElement('.movie-item__content a');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 25);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.movie-item__content a');
});
