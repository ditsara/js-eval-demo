'use strict';

var ss = angular.module('ss', [])
.controller('demo', ['$scope', function ($s){

  function evalPreprocess(str){
    if (typeof(str) === "string") {
      var scoped = str.replace(/\D+\d+/, function (x){
        return "parseInt($s." + x + ")"; 
      });
      return scoped;
    } else return 0;
  }

  $s.hello = "Hello World";

  $s.a2_eval = function (){
    var processed = evalPreprocess($s.a2);
    console.log(processed);
    return eval(processed);
  }; 
}]);
