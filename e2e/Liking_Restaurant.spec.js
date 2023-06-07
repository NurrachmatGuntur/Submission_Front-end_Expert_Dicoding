Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({
  I,
}) => {
  I.amOnPage('/');

  I.waitForElement('.movie-item__content a', 10);

  const firstRestaurant = locate('.movie-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.movie-item');

  const likedRestaurantTitle = await I.grabTextFrom('.movie-item__content');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({
  I,
}) => {
  I.amOnPage('/');

  I.waitForElement('.movie-item__content a');

  const firstRestaurant = locate('.movie-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.movie-item');

  const likedRestaurantTitle = await I.grabTextFrom('.movie-item__content');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.waitForElement('.movie-item__content a');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.movie-item__content a');
});