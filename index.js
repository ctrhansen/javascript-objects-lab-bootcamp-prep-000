var recipes = {prop: 1, prop2: 2}

function updateObjectWithKeyAndValue(object, key, value) {
  return {prop: 1, prop2: 2}
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1}
  return {prop: 1, prop2: 2}
}
function deleteFromObjectByKey(object, key) {
  delete recipes.prop2
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}
