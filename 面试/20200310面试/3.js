function debounce(doRequest, wait) {
  let timer;
  return function() {
    var context = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      doRequest.apply(context, args);
      timer = null;
    }, wait);
  }
}