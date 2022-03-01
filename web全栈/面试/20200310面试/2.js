document.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target.tagName);
  let isa = false;
  let tmp = e.target;
  while(tmp != null) {
    if (tmp.tagName == 'A') {
      isa = true;
      break;
    }
    tmp = tmp.parentNode;
  }
  if (isa) {
    let href = tmp.getAttribute('href');
    if(href.startsWith('https://')) {
      console.log(href);
    } else {
      console.warn(href);
    }
  }
});