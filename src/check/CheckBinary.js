
export default {
  checkZeroOrOne (binary){
    for (var i = 0 ; i < binary.length ; i++) {
      if(binary[i] == 0 || binary[i] == 1) continue
      else return false
    }
    return true
  },
  checkLength (binary){
    if(binary.length == 8) return true
    else return false
  }
}
