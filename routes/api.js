/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
      if (initNum == "Invalid number" || isNaN(initNum) == true || initNum == Infinity) {
        if (returnUnit == "Invalid unit") {
          res.send("Invalid number and unit")
        }
        else {
          res.send("Invalid number")
        }
      }
      else if (returnUnit == "Invalid unit") {
        res.send("Invalid unit")
      }
      else {
        res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
      }
    });
    
};
