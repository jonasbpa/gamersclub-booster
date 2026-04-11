const scriptsToInject = [ 'events-listener.js', 'set-premium.js' ];

export default function injectPageScripts() {

  scriptsToInject.forEach( script => {
    const scriptPath = chrome.runtime.getURL( `/${ script }` );
    const scriptEl = document.createElement( 'script' );
    scriptEl.src = scriptPath;
    document.body.appendChild( scriptEl );
  }
  );
}
