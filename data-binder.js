function bindProperty(owner, keyName, val, elements) {
  Object.defineProperty(owner, keyName, {
    get: function() {
      return keyName;
    },
    set: function(val) {
      elements.forEach(function(el) {
        el.innerHTML = val;
      });
      
      keyName = val;
    }
  });
  owner[keyName] = val;
}