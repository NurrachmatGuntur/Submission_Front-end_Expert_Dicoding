Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/favorite');
});
Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#movies');
    I.see('Tidak ada restaurant untuk ditampilkan', '.movies');
  });
