/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var index = input.search(/[a-zA-Z]/)
    var numArr = input.substring(0, index).split("/")
    
    if (numArr.length <= 2) {
      if (numArr.length == 1) {
        if (numArr[0] == "") {
          return 1
        }
        else {
          return Number(numArr[0])
        }
      }
      else {
        var calc = Number(numArr[0]) / Number(numArr[1])
        return parseFloat(calc.toFixed(5))
      }
    }
    else {
      return "Invalid number"
    }
  };
  
  this.getUnit = function(input) {
    var index = input.search(/[a-zA-Z]/)
    return input.substring(index).toLowerCase()
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case "l":
        return "gal"
        break;
      case "gal":
        return "l"
        break;
      case "km":
        return "mi"
        break;
      case "mi":
        return "km"
        break;
      case "lbs":
        return "kg"
        break;
      case "kg":
        return "lbs"
        break;
      default:
        return "Invalid unit"
   }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case "l":
        return "litre"
        break;
      case "gal":
        return "gallon"
        break;
      case "km":
        return "kilometre"
        break;
      case "mi":
        return "mile"
        break;
      case "lbs":
        return "pound"
        break;
      case "kg":
        return "kilogram"
        break;
      default:
        return "Invalid unit"
   }  
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
        
    if (initNum == "Invalid number") {
      return "Invalid number"
    }
    else if (initUnit == "l") {
      var calc = initNum/galToL 
    }
    else if (initUnit == "gal") {
      var calc = initNum*galToL
    }
    else if (initUnit == "kg") {
      var calc = initNum/lbsToKg
    }
    else if (initUnit == "lbs") {
      var calc = initNum*lbsToKg
    }
    else if (initUnit == "km") {
      var calc = initNum/miToKm
    }
    else if (initUnit == "mi") {
      var calc = initNum*miToKm
    }
    else {
      return "Invalid unit"
    }
    return parseFloat(calc.toFixed(5))
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) 
          + ((initNum > 1) ? "s" : "") 
          + " converts to " + returnNum + " " 
          + this.spellOutUnit(returnUnit) 
          + ((returnNum > 1) ? "s" : "") 
  };
  
}

module.exports = ConvertHandler;
