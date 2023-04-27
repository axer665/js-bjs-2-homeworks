//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    return (...args) => {
        let hash = {
            value: args.join(","),
            hashValue: md5(args.join(","))
        }
  
        if (cache.length > 5) {
            cache.shift();
        } 
        
        if (cache.find(item => item.value === hash.value)) {
            return "Из кэша: " + func.apply(this, args);
        }
  
        cache.push(hash);
        return "Вычисляем: " + func.apply(this, args);
    };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    
    function wrapper(...args) {  
      wrapper.allCount++;
  
      if (wrapper.count === 0) {
           func.apply(this, args);
      }
        
      if (timeoutId === null){
          wrapper.count++;
          timeoutId = setTimeout(() => {
              func.apply(this, args);
          }, delay);
      } else {
          timeoutId = null;
      }
    }
    return wrapper;
}