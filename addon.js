var fixButton = function() {
  var fsBtn = document.querySelector('.GEFR-03BIB');
  if (!fsBtn) {
    setTimeout(fixButton, 50);
    return;
  }
  fsBtn.style.position = 'absolute';
  fsBtn.style.top = '16px';
  fsBtn.style.right = '60px';
  fsBtn.style.zIndex = '99999';
  document.body.appendChild(fsBtn);

  var sidebar = document.getElementById('gwt-debug-sidebar');
  sidebar.style.overflowY = 'scroll';
  sidebar.style.overflowX = 'visible';
};

setTimeout(fixButton);
