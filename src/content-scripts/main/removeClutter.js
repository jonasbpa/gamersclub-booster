import { waitForElement } from '../../utils';

export const removeClutter = async () => {
  $( '#csgo-header-wrapper span:first' ).remove();
  $( '#GamersClubCSApp-vault' ).remove();
  $( '.WorkshopBanner' ).remove();
  $( '.headerPlatform' ).css( 'height', '80px' );
  $( '.lobby-header-ads' ).remove();
  $( '.SideAdvertisement' ).remove();
  $( '.MainHeader__play' ).css( 'width', '12rem' );
  $( '#leaderboard_strike_button' ).remove();
  $( '.MainHeader__navbar--subscribe' ).remove();
  $( 'cef-fixed-app-container' ).css( 'top', '80px' ).css( 'height', 'calc(-80px + 100vh)' );

  waitForElement( '#GamersClubCSApp-liveOddsBanner' )
    .then( () =>
      $( '#GamersClubCSApp-liveOddsBanner' ).parent().parent().parent().parent().parent().remove()
    );
  waitForElement( '.sp-ad-wrapper' )
    .then( () =>
      $( '.sp-ad-wrapper' ).parent().remove()
    );

  autoClickButtonWarmup();
};

const autoClickButtonWarmup = () => {
  waitForElement( '.ButtonLink-sc-1kiqfzg-0' )
    .then( () => {
      $( '.ButtonLink-sc-1kiqfzg-0' ).click();
      autoClickButtonWarmup();
    } );
};
