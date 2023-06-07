Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', async ({ I }) => {
    await new Promise((r) => setTimeout(r, 3000));
    let dataRestaurantFavorite = await I.grabNumberOfVisibleElements('.movie-item');
    if (dataRestaurantFavorite === 0){
      console.log('Tidak ada data restaurant di daftar favorite');
    }
    I.amOnPage('/');
    await new Promise((r) => setTimeout(r, 3000));
    I.seeElement('.movie-item a:first-child');
    I.click('.movie-item a:first-child');
    await new Promise((r) => setTimeout(r, 3000));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    await new Promise((r) => setTimeout(r, 3000));
    dataRestaurantFavorite = await I.grabNumberOfVisibleElements('.movie-item');
    if ( dataRestaurantFavorite === 1){
      console.log('Berhasil Menambahkan Restaurant kedaftar favorite');
    }
    I.seeElement('#likeButton');
    I.click('#likeButton');
    await new promise ((r) => setTimeout(r, 3000));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    dataRestaurantFavorite = await I.grabNumberOfVisibleElements('.movie-item');
    if ( dataRestaurantFavorite === 0){
      console.log('Berhasil Menghapus Restaurant dari daftar favorite');
    }
  });
