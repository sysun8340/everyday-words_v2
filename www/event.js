function onLoad () {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady () {
  document.addEventListener('backbutton', onBackButton, false)
}
function onBackButton () {

  if(window.location.hash === '#/city') {
    window.location.hash = '#/'
  }
  else {
    if(confirm('是否退出程序')) {
      navigator.app.exitApp()
    }
  }
}
onLoad();
