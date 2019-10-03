//Create a Proxy based object that disables the setting of any field and only provides access to the nextId field.
//If that field is read, either initialize it to 1 if the target has no such field or increment it with 1 and then return the new value.
const target = { a: 1, b: 1, c: 1 }

const handler = {
  get: function(target, field) {
    if (field === 'nextId') {
      if (target.hasOwnProperty('nextId')) {
        target['nextId']++
      } else {
        target['nextId'] = 1
      }
      return target['nextId']
    }
  }
}

const proxyObject = new Proxy(target, handler)
console.log(proxyObject.nextId)
console.log(proxyObject.nextId)
console.log(proxyObject.nextId)