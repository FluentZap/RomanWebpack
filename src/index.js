import { convertToRoman } from './romanTimes';
import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

var numberRe = /\D/;

$(document).ready(function () {

  $('#arabic').on('input', function () {
    var text = $('#arabic').val();
    var number = parseInt(text);

    if (numberRe.test(text) || number > 3999999) {
      $('#arabic').val(text.substring(0, text.length - 1));
    }

    $('#roman').val(convertToRoman($('#arabic').val()));
  });

});