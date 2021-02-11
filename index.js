function updateObjectWithKeyAndValue (object, key, value) {
  var newobj = Object.assign({},object)
  newobj[key] = value
  return newobj
  return object
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return object[key] = value
}
