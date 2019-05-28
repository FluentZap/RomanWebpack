import { convertToRoman } from './romanTimes';
import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

var numberRe =/\D/;
//var numeralRe =/[^IVLMCDX]/;

$(document).ready(function () {

});

$(document).ready(function () {

  $('#arabic').on('input', function () {
    var text = $('#arabic').val();
    var number = parseInt(text);

    if (numberRe.test(text) || number > 3999999) {
      $('#arabic').val(text.substring(0, text.length - 1));
    }

    $('#roman').val(convertToRoman($('#arabic').val()));
  });

  // $('#roman').on('input',function(e){
  //     var text = $('#roman').val().toUpperCase();
  //     console.log(text);
  //     if (numeralRe.test(text))
  //     text = text.substring(0, text.length - 1);

  //     $('#roman').val(text);
  //     //$('#roman').val(text);
  //     $('#arabic').val(convertToArabic(text));
  // });



});