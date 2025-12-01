export const removeClutter = () => {
  $( '#csgo-header-wrapper span:first' ).remove();
  $( '#GamersClubCSApp-vault' ).remove();
  $( '.WorkshopBanner' ).remove();
  $( '.headerPlatform' ).css( 'height', '80px' );
  $( '.lobby-header-ads' ).remove();
  $( '.MainHeader__play' ).css( 'width', '12rem' );
  $( '#leaderboard_strike_button' ).remove();
  $( '.MainHeader__navbar--subscribe' ).remove();
  $( 'cef-fixed-app-container' ).css( 'top', '80px' ).css( 'height', 'calc(-80px + 100vh)' );
};
