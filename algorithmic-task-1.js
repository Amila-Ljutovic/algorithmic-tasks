
function getNewStruct(arr) {
    let result = {id: null, value: null}
    
    let length = arr.length

    //arrays of ids and values
    tempArrayIds = arr.map(function(e) { return e.id; });
    tempArrayValues = arr.map(function(e) { return e.value; });

    let counterObject = {}

    //check if there is any number that is skipped and set correct id
    for (var i = 1; i <= length; i++) {
        if (tempArrayIds.indexOf(i) == -1) {
          result.id = i
        }
      }
      if(!result.id) result.id = length+1

    //counting values
    tempArrayValues.forEach(element => {
        if(!counterObject[`${element}`]) counterObject[`${element}`] = 1
        else {
            counterObject[`${element}`] ++
        }
    });

    let key = ''
    
    //find lowest number with count above 1
    Object.keys(counterObject).forEach(item => {
        if(counterObject[`${item}`] > 1 ) key = Number(item)
    })
   
    let nextInteger = key + 1

    //finding next unused number in values
    while(counterObject[`${nextInteger}`]) {
        nextInteger ++
    }
    result.value = nextInteger
   
    return result

}

let arr = [{id:1, value:1}, {id:2, value:3}, {id:3, value:7}, {id:4, value:2}, {id:5, value:7}, {id:6, value: 8}, {id: 7, value: 9}]
console.log(getNewStruct(arr))