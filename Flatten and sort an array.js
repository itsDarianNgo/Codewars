"use strict";

function flattenAndSort(array) {
  let flat = array.flat()
  flat.sort((a,b)=>a-b)
  return flat;
}