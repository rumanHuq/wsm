// code that represents UI, doesn't deal with back end

/* CORDOVA codes */


function mobileDev() {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);

  function onDeviceReady() {
    // Handle the Cordova pause and resume events
    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.



    const main = require('./common/index');

    main();

  }

  function onPause() {
    // TODO: This application has been suspended. Save application state here.
  }

  function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
  }

}

if (mobile || mobileProd) { mobileDev(); }
// ----------------------------- end of CORDOVA ---------------------- //

/*electron codebase*/

if (desktop || desktopProd) {
  require('./css/index.sass');
  
}