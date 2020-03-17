
exports.min = function min (arr) {
  if ( arr == '' || arr == undefined ) {
    return 0;
  } else {
    return Math.min.apply( null, arr )
  }
}

exports.max = function max (arr) {
  if ( arr == '' || arr == undefined ) {
    return 0;
  } else {
    return Math.max.apply( null, arr ) 
  }
}

exports.avg = function avg (arr) {
  if ( arr == '' || arr == undefined ) {
    return 0;
  } else {
    let summ = 0;
    for ( let i = 0; i < arr.length; i++ ) {
      summ += arr[i];
    } return summ / arr.length;
  }
}
