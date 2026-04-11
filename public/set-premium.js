const handler = {
  get( target, prop ) {
    console.log( 'proxy used' );
    if ( prop === 'isPlayerSubscriber' || prop === 'isSubscriber' ) {
      return true;
    }
    return target[prop];
  }
};

// Tentar interceptar objetos globais
const checkGlobals = setInterval( () => {
  if ( window.currentUser ) {
    window.currentUser = new Proxy( window.currentUser, handler );
    console.log( '[✓] Proxy aplicado!' );
    clearInterval( checkGlobals );
  }
}, 100 );
