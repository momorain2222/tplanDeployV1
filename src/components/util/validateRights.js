import _ from "lodash";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

function isEligible3(resultArr, reqArr) {
  console.log(resultArr);
  console.log(reqArr);

  const isChecked = resultArr.includes([1, 1]);
  console.log(isChecked);
  return isChecked;
}

function isEligible2(resultArr, reqArr) {
  console.log(resultArr);
  console.log(reqArr);
  var i, j, current;

  for (i = 0; i < resultArr.length; i++) {
    current = resultArr[i];
    for (j = 0; j < reqArr.length; j++) {
      if (current.join(",") !== reqArr[j].join(",")) return false;
    }
  }
  return true;
}

function isEligible4(superset, subset) {
  return subset.every(function(value) {
    return superset.indexOf(value) >= 0;
  });
}

export function isEligible(superset, subset) {
  if (0 === subset.length) {
    return false;
  }

  console.log("call check eligible....");
  console.log("result array is ", superset);
  console.log("required array is ", ...subset);

  const filterArr = superset.filter(e1 => {
    let result = null;
    for (let e2 of subset) {
      console.log("e1", e1, "e2", e2);
      result = e1.equals(e2);
      if (result) break;
    }
    return result;
  });
  console.log("filter array ", filterArr);

  if (filterArr.length === subset.length) {
    return true;
  } else {
    return false;
  }
  //return _.every(superset, [...subset]);
}

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function(array) {
  // if the other array is a falsy value, return
  if (!array) return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length) return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
