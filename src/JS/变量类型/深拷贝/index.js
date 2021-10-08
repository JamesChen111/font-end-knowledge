/***
 * @params {Object} obj 
 * 1. 涉及到嵌套的就需要递归
 * 2. 递归需要一个终止的出口
 */

function deepClone(obj = {}) {
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }

  let result;
  if(obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}