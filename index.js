function toArray(collection) {
  if (!Array.isArray(collection)) {
    return Object.values(collection);
  } else {
    return collection.slice();
  }
}

function myEach(collection, callback) {
  const arrayCollection = toArray(collection);
  for (let element of arrayCollection) {
    callback(element);
  }
  return collection;
}

function myMap(collection, callback) {
  const arrayCollection = toArray(collection);
  let mappedCollection = [];
  for (let element of arrayCollection) {
    mappedCollection.push(callback(element));
  }
  return mappedCollection;
}

function myReduce(collection, callback, acc) {
  const arrayCollection = toArray(collection);
  let start = 0;
  if (!acc) {
    acc = arrayCollection[0];
    start = 1;
  }
  for (let i = start; i < arrayCollection.length; i++) {
    acc = callback(acc, arrayCollection[i], arrayCollection);
  }
  return acc;
}

function myFind(collection, predicate) {
  const arrayCollection = toArray(collection);
  for (let element of arrayCollection) {
    if (predicate(element)) {
      return element;
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const arrayCollection = toArray(collection);
  const filteredArray = [];
  for (let element of arrayCollection) {
    if (predicate(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

function mySize(collection) {
  const arrayCollection = toArray(collection);
  return arrayCollection.length;
}

function myFirst(array, n) {
  if (n >= 0) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  if (n >= 0) {
    return array.slice(-n);
  } else {
    return array[array.length - 1];
  }
}

function mySortBy(array, callback) {
  const arrayCopy = array.slice();
  return arrayCopy.sort((a, b) => {
    if (callback(a) < callback(b)) {
      return -1;
    } else if (callback(a) > callback(b)) {
      return 1;
    }
    return 0;
  });
}

function myFlatten(array, shallow, newArr = []) {
  if (shallow) {
    for (let element of array) {
      console.log(element);
      if (Array.isArray(element)) {
        newArr = newArr.concat(element);
      } else {
        newArr.push(element);
      }
    }
  } else {
    for (let element of array) {
      if (Array.isArray(element)) {
        const inner = myFlatten(element);
        newArr = newArr.concat(inner);
      } else {
        newArr.push(element);
      }
    }
  }
  return newArr;
}

const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]];
console.log(myFlatten(nestedArr));

function myKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
