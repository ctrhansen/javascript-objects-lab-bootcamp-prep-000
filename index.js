var recipes = {prop: 1, prop2: 2}

function updateObjectWithKeyAndValue(object, key, value) {
  return {prop: 1, prop2: 2}
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1}
  obj[key] = value
}
function deleteFromObjectByKey(object, key) {
  var obj = {foo: 'bar'}
  var newObj = Object.assign({}, obj)
  delete newObj.foo 
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}
