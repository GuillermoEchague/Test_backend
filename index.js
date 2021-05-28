const EllysBalancedStrings = (string, index = 0, total = 1) => {
  const vowals = ["A", "E", "I", "O", "U"];
  const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z"];
  var maxVowal = 0;
  var maxConsonant = 0;
  var changeStr = string;

  for (let i = 0; i < changeString.length; i++) {
    if (vowals.find((v) => v === changeStr[i])) {
      maxVowal++;
    } else {
      maxConsonant++;
    }
  }


  if (maxVowal === maxConsonant) {
    return index;
  } else {
      
    for (let i = 0; i < changeStr.length; i++) {
      if (changeStr[i] === "A") i++;
      
      if (changeStr[i] === "Z") i++;
      
      if (changeStr[i] === "Y") i++;
      
      if (
            changeStr.length >= 100 ||
            changeStr.length <= 2
        ) {
        return 'You must write a string between 2 and 100 letters'
        }



      if (!vowals.find((v) => v === changeStr[i])) {
        var change = letters.indexOf(changeStr[i]);
        var changeVowals = letters[change + total];
        
        if (vowals.find((v) => v === changeVowals)) {
            index = index + total
            total = 1
          var array = changeStr.split("");
          array[i] = changeVowals;
          changeStr = array.join("");
          return EllysBalancedStrings(changeStr, index, total);
        
        } else {
          changeVowals = letters[change - total];
          
          if (vowals.find((v) => v === changeVowals)) {
            index = index + total
            total = 1
            var array = changeStr.split("");
            array[i] = changeVowals;
            changeStr = array.join("");
            
            return EllysBalancedStrings(changeStr, index, total);
          }
        }
      }
    }
    total++;
    EllysBalancedStrings(changeStr, index, total);
  }
};

module.exports = {
  EllysBalancedStrings,
};