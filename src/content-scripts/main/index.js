import { autoCompactMode } from './autoCompactMode';
import { autoDarkMode } from './autoDarkMode';
import { adicionarBarraLevel } from './barraLevel';
import { removeClutter } from './removeClutter';
import injectPageScripts from './injectPageScripts';

let generalOptions = [];
chrome.storage.sync.get( null, function ( result ) {
  generalOptions = result;
  initGcBooster();
} );

const initGcBooster = async () => {
  // injeta os scripts no contexto da página para ter acesso às variáveis globais
  injectPageScripts();

  if ( generalOptions.removeClutter ) {
    removeClutter();
  }

  if ( generalOptions.mostrarLevelProgress ) {
    adicionarBarraLevel();
  }

  if ( generalOptions.autoDarkMode ) {
    autoDarkMode();
  }
  if ( generalOptions.autoCompactMode ) {
    autoCompactMode();
  }
};
