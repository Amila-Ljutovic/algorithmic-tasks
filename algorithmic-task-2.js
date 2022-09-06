

function lookup(obj, path) {
  
    let array = path.split('.')
    obj = obj[`${array[0]}`]
    if(!obj) return 'Property does not exist in object'
    array.shift()

    if(!array.length)
        return obj
       
    return lookup(obj, array.join('.'))
}

let obj = {
    name: 'amila',
    value: '1',
    obj: {
        const: {
            t: 'nesto',
            test: {
                p: 'amila'
            }
        }
    }
}

console.log(lookup(obj, 'obj.const.test.p'))

